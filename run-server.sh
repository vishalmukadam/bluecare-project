#!/bin/bash
cd /home/z/my-project
node node_modules/.bin/next start -p 3000 &
SERVER_PID=$!
# Keep script alive
while kill -0 $SERVER_PID 2>/dev/null; do
  sleep 5
done
