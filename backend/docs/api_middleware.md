# This documentation provides an overview of several middleware functions and the WebSocket setup used in the backend of the Note application.

## errorHandler.js
Purpose:
The errorHandler middleware function handles errors in the application by logging them and sending a response to the client.

Implementation:
```
import { logEvents } from "./logger.js";

const errorHandler = (err, req, res, next) => {
    logEvents(`${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, 'errLog.log');
    console.log(err.stack);

    const status = res.statusCode ? res.statusCode : 500; // Server error

    res.status(status);

    res.json({ message: err.message, isError: true });
}

export default errorHandler;
```

### Key Points:
+ Logs the error details using logEvents.
+ Outputs the error stack to the console.
+ Sends an appropriate status code and error message to the client.

## loginLimiter.js
Purpose:
The loginLimiter middleware function limits the number of login attempts from a single IP address to prevent brute force attacks.

Implementation:
```
import { logEvents } from '../middleware/logger.js';
import rateLimit from 'express-rate-limit';

const loginLimiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 5, // Limit each IP to 5 login requests per `window` per minute
    message: { message: 'Too many login attempts from this IP, please try again after a 60 second pause' },
    handler: (req, res, next, options) => {
        logEvents(`Too Many Requests: ${options.message.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, 'errLog.log');
        res.status(options.statusCode).send(options.message);
    },
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

export default loginLimiter;
```
### Key Points:
+ Limits the number of login attempts to 5 per minute.
+ Logs an event when the rate limit is exceeded.
+ Sends a response with a 429 status code and a message to the client when the limit is exceeded.

## verifyJWT.js
Purpose:
The verifyJWT middleware function verifies the JWT token provided in the request headers to ensure the request is authenticated.

Implementation:
```
import jwt from 'jsonwebtoken';

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;

    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    
    const token = authHeader.split(' ')[1];

    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.status(403).json({ message: 'Forbidden' });
            req.user = decoded.UserInfo.username;
            req.roles = decoded.UserInfo.roles;
            next();
        }
    )
};

export default verifyJWT;
```

### Key Points:
+ Checks for the presence of an authorization header and validates its format.
+ Verifies the JWT token using the secret key.
+ Adds user information to the request object if the token is valid.
+ Access and refresh tokens are to be manually stored in the header using the Authorization header.
+ Returns a 401 status code if the token is missing or invalid, and a 403 status code if the token verification fails.

## webSocket.js
Purpose:
The webSocket.js module sets up the WebSocket server and manages client connections, allowing messages to be broadcasted to all connected clients.

Implementation:
```
import { WebSocketServer, WebSocket } from 'ws';

let wssClients = [];

export const addClient = (ws) => {
    wssClients.push(ws);
};

export const removeClient = (ws) => {
    wssClients = wssClients.filter(client => client !== ws);
};

export const broadcastMessage = (message) => {
    console.log('Broadcasting message:', message); // Log broadcasting
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
```
### Key Points:
+ Manages an array of connected WebSocket clients.
+ Adds and removes clients from the array.
+ Broadcasts messages to all connected clients.
+ Sets up the WebSocket server and handles connection, disconnection, and errors.
