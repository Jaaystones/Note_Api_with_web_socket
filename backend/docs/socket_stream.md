# Socket connection

## Overview
This documentation provides information on the socket connection setup using the WebSocket for real time communication

### Socket Connection Setup
Ensure that the dependencies are installed
```bash
npm install ws
```
### Cliennt.js
This file contains the logic for creating a websocket connection.
```bash
import WebSocket from 'ws';

let ws = new WebSocket('ws://localhost:7000');

ws.on('open', () => {
    console.log('Connected to WebSocket server');
});

ws.on('message', (data) => {
    const message = JSON.parse(data);
    console.log('Received message:', message); 
});

ws.on('close', () => {
    console.log('Disconnected from WebSocket server');
    reconnectWebSocket();
});

ws.on('error', (error) => {
    console.error('WebSocket error:', error);
});

```
### Socket Connection implementation
To start the socket connection server, run the following command on another terminal while the express server is running
```bash
node client.js
```

### Socket Connection endpoint
-**url:** `ws://localhost:7000`