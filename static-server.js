// Ultra-lightweight static server (~50 lines)
// Serves pre-built Next.js static pages directly - minimal memory footprint
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const APP_DIR = path.join(__dirname, '.next/server/app');
const STATIC_DIR = path.join(__dirname, '.next/static');
const PUBLIC_DIR = path.join(__dirname, 'public');

const MIME = {
  '.html': 'text/html',
  '.json': 'application/json',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

function serve(res, filePath, status = 200) {
  const ext = path.extname(filePath);
  const contentType = MIME[ext] || 'application/octet-stream';
  try {
    const data = fs.readFileSync(filePath);
    res.writeHead(status, {
      'Content-Type': contentType,
      'Content-Length': data.length,
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable',
    });
    res.end(data);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Not Found</h1>');
  }
}

const server = http.createServer((req, res) => {
  const url = req.url.split('?')[0];

  // Serve _next/static assets (JS, CSS, fonts, images)
  if (url.startsWith('/_next/static/')) {
    return serve(res, path.join(__dirname, '.next', url));
  }

  // Serve public files (images, favicon, etc.)
  const publicPath = path.join(PUBLIC_DIR, url);
  if (fs.existsSync(publicPath) && fs.statSync(publicPath).isFile()) {
    return serve(res, publicPath);
  }

  // Serve pre-rendered HTML pages
  // Route: /about-us -> .next/server/app/about-us.html
  // Route: / -> .next/server/app/index.html
  const routePath = url === '/' ? '/index' : url;
  const htmlFile = path.join(APP_DIR, routePath + '.html');
  if (fs.existsSync(htmlFile)) {
    return serve(res, htmlFile);
  }

  // RSC data for client navigation
  const rscFile = path.join(APP_DIR, routePath + '.rsc');
  if (fs.existsSync(rscFile) && req.headers.accept?.includes('text/x-component')) {
    return serve(res, rscFile);
  }

  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.end('<h1>404 Not Found</h1>');
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Static server running on http://localhost:${PORT}`);
});