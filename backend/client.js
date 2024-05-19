import WebSocket from 'ws';

let ws = new WebSocket('ws://localhost:7000');

ws.on('open', () => {
    console.log('Connected to WebSocket server');
});

ws.on('message', (data) => {
    const message = JSON.parse(data);
    console.log('Received message:', message); // Detailed logging
});

ws.on('close', () => {
    console.log('Disconnected from WebSocket server');
    reconnectWebSocket();
});

ws.on('error', (error) => {
    console.error('WebSocket error:', error);
});

// Additional function to manually close and reopen the connection
const reconnectWebSocket = () => {
    ws.close();
    setTimeout(() => {
        ws = new WebSocket('ws://localhost:7000');
    }, 1000); // Delay before reconnecting
};

// // Function to clear stored messages (if any)
// const clearStoredMessages = () => {
//     // Implement logic to clear stored messages if using any storage
// };

// // Call clearStoredMessages before establishing the connection
// clearStoredMessages();
