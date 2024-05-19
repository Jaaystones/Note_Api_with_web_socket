import { WebSocketServer, WebSocket } from 'ws';

let wssClients = [];

export const addClient = (ws) => {
    wssClients.push(ws);
};

export const removeClient = (ws) => {
    wssClients = wssClients.filter(client => client !== ws);
};

export const broadcastMessage = (message) => {
    console.log('Broadcasting message:', message); // Add logging here to see if broadcastMessage is called
    wssClients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(message));
        }
    });
};

export const setupWebSocket = (server) => {
    const wss = new WebSocketServer({ server });

    wss.on('connection', (ws) => {
        console.log('Client connected');
        addClient(ws);

        ws.on('close', () => {
            console.log('Client disconnected');
            removeClient(ws);
        });

        ws.on('error', (error) => {
            console.log('WebSocket error:', error);
            removeClient(ws);
        });
    });
};
