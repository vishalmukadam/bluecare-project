#!/bin/bash
# Watchdog script - checks if server is running, starts it if not
# Called periodically by cron

cd /home/z/my-project

# Check if port 3000 is responding
if curl -s -o /dev/null -w "" http://localhost:3000/ 2>/dev/null; then
  echo "$(date): Server is running" >> watchdog.log
  exit 0
fi

echo "$(date): Server not responding, starting..." >> watchdog.log

# Kill any existing next processes
pkill -f "next dev" 2>/dev/null
pkill -f "next start" 2>/dev/null
fuser -k 3000/tcp 2>/dev/null 2>&1
sleep 2

# Start the dev server in background
NODE_OPTIONS='--max-old-space-size=3072' nohup node node_modules/.bin/next dev -p 3000 --webpack >> dev.log 2>&1 &
disown

echo "$(date): Server started" >> watchdog.log
