#!/bin/bash
# Start the Next.js production server with double-fork + setsid
# This ensures the process survives when the parent shell is killed
cd /home/z/my-project

# Kill any existing server
pkill -f 'next start' 2>/dev/null
pkill -f 'next dev' 2>/dev/null
fuser -k 3000/tcp 2>/dev/null
sleep 2

# Ensure build exists
if [ ! -f .next/BUILD_ID ]; then
  echo "Building..."
  NODE_OPTIONS='--max-old-space-size=3072' npx next build
fi

# Start with double-fork + setsid for full detachment
(setsid node node_modules/.bin/next start -p 3000 </dev/null >/dev/null 2>&1 &)

sleep 3
# Verify
if curl -s -o /dev/null http://localhost:3000/ 2>/dev/null; then
  echo "Server is running on port 3000"
else
  echo "Server failed to start"
fi
