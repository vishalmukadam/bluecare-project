#!/bin/bash
while true; do
  cd /home/z/my-project
  node node_modules/.bin/next start -p 3000 &
  PID=$!
  # Wait for it to die
  wait $PID 2>/dev/null
  sleep 3
done
