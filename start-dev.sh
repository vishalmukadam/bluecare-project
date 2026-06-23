#!/bin/bash
# Robust auto-restart dev server for sandbox environment
# This script keeps the Next.js dev server alive by automatically
# restarting it whenever it crashes.
cd /home/z/my-project

trap '' SIGTERM SIGINT SIGHUP

# Clean old log
rm -f dev.log

echo "$(date): Auto-restart dev server starting..." >> dev.log

while true; do
  echo "$(date): Starting Next.js dev server..." >> dev.log

  # Start the dev server with increased memory
  NODE_OPTIONS='--max-old-space-size=3072' node node_modules/.bin/next dev -p 3000 >> dev.log 2>&1 &
  SERVER_PID=$!
  echo "$(date): Server PID: $SERVER_PID" >> dev.log

  # Wait for the server to be ready (up to 60 seconds)
  for i in $(seq 1 30); do
    sleep 2
    if ! kill -0 $SERVER_PID 2>/dev/null; then
      echo "$(date): Server process died during startup at ${i}*2s" >> dev.log
      break
    fi
    if curl -s -o /dev/null http://localhost:3000/ 2>/dev/null; then
      echo "$(date): Server ready and responding" >> dev.log
      break
    fi
  done

  # Monitor the server - if it dies, restart it
  while kill -0 $SERVER_PID 2>/dev/null; do
    sleep 3
  done

  EXIT_CODE=$?
  echo "$(date): Server exited, restarting in 3s..." >> dev.log

  # Kill any orphaned processes on port 3000
  fuser -k 3000/tcp 2>/dev/null || true
  sleep 3
done
