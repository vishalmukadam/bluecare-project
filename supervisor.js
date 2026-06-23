// Simple Node.js process supervisor that keeps the Next.js dev server alive
// This runs as a standalone process that monitors and restarts the server

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const http = require('http');

const LOG_FILE = path.join(__dirname, 'dev.log');
const PORT = 3000;
const RESTART_DELAY = 3000; // 3 seconds

let serverProcess = null;
let restartCount = 0;

function log(message) {
  const timestamp = new Date().toISOString();
  const line = `[${timestamp}] ${message}\n`;
  fs.appendFileSync(LOG_FILE, line);
  console.log(line.trim());
}

function checkServer() {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:${PORT}/`, (res) => {
      resolve(res.statusCode === 200);
    });
    req.on('error', () => resolve(false));
    req.setTimeout(3000, () => { req.destroy(); resolve(false); });
  });
}

function startServer() {
  log('Starting Next.js dev server...');
  
  const isProduction = process.env.NODE_ENV === 'production';
  
  const args = isProduction 
    ? [path.join(__dirname, 'node_modules/next/dist/bin/next'), 'start', '-p', String(PORT)]
    : [path.join(__dirname, 'node_modules/next/dist/bin/next'), 'dev', '-p', String(PORT), '--webpack'];

  serverProcess = spawn('node', args, {
    cwd: __dirname,
    env: {
      ...process.env,
      NODE_OPTIONS: '--max-old-space-size=3072',
    },
    stdio: ['ignore', 'pipe', 'pipe'],
    detached: false,
  });

  // Pipe stdout and stderr to log file
  const logStream = fs.createWriteStream(LOG_FILE, { flags: 'a' });
  serverProcess.stdout.pipe(logStream);
  serverProcess.stderr.pipe(logStream);
  serverProcess.stdout.pipe(process.stdout);
  serverProcess.stderr.pipe(process.stderr);

  serverProcess.on('exit', (code, signal) => {
    log(`Server exited with code=${code} signal=${signal}`);
    serverProcess = null;
    scheduleRestart();
  });

  serverProcess.on('error', (err) => {
    log(`Server error: ${err.message}`);
    serverProcess = null;
    scheduleRestart();
  });

  // Wait for server to be ready
  waitForReady();
}

function waitForReady() {
  let attempts = 0;
  const maxAttempts = 30;
  
  const interval = setInterval(async () => {
    attempts++;
    if (serverProcess === null) {
      clearInterval(interval);
      return;
    }
    
    const isReady = await checkServer();
    if (isReady) {
      log('Server is ready and responding');
      clearInterval(interval);
    } else if (attempts >= maxAttempts) {
      log('Server failed to become ready in time, restarting...');
      clearInterval(interval);
      if (serverProcess) {
        serverProcess.kill('SIGTERM');
      }
    }
  }, 2000);
}

function scheduleRestart() {
  restartCount++;
  log(`Restarting in ${RESTART_DELAY/1000}s... (restart #${restartCount})`);
  setTimeout(() => {
    startServer();
  }, RESTART_DELAY);
}

// Health check loop - if server stops responding but process is still alive, restart it
async function healthCheck() {
  if (serverProcess !== null) {
    const isHealthy = await checkServer();
    if (!isHealthy) {
      // Check if process is still running
      try {
        process.kill(serverProcess.pid, 0);
        // Process is alive but not responding - give it a moment
        log('Server not responding, monitoring...');
      } catch {
        // Process is dead, will be restarted by exit handler
      }
    }
  }
}

// Start health check every 15 seconds
setInterval(healthCheck, 15000);

// Clean up on exit
process.on('SIGTERM', () => { log('Supervisor received SIGTERM'); process.exit(0); });
process.on('SIGINT', () => { log('Supervisor received SIGINT'); process.exit(0); });

// Start!
log('Supervisor starting...');
// Clean old log
fs.writeFileSync(LOG_FILE, '');
startServer();
