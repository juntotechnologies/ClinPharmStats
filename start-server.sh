#!/bin/bash

# Define the port to use
PORT=3000

# Check if the port is already in use
if lsof -i :$PORT > /dev/null 2>&1; then
  echo "Port $PORT is already in use. Attempting to kill the process..."
  
  # Get the PID of the process using the port
  PID=$(lsof -t -i :$PORT)
  
  if [ -n "$PID" ]; then
    echo "Killing process with PID: $PID"
    kill -9 $PID
    
    # Wait a moment to ensure the port is released
    sleep 1
    
    echo "Process killed successfully."
  else
    echo "Could not find PID for the process using port $PORT."
    exit 1
  fi
fi

# Check if we want to run in development or production mode
if [ "$1" == "dev" ]; then
  echo "Starting Next.js in development mode on port $PORT..."
  npm run dev -- -p $PORT
else
  echo "Starting Next.js in production mode on port $PORT..."
  npm run build && npm run start -- -p $PORT
fi 