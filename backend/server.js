import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import { mongoDb }  from './config/dbConfig.js';
import userRoutes from './routes/userRoutes.js';
import noteRoutes from './routes/noteRoutes.js';
import authRoutes from './routes/authRoutes.js';
import { logger, logEvents } from './middleware/logger.js';
import errorHandler from './middleware/errorHandling.js';
import corsOptions from './config/corsOptions.js';
import { setupWebSocket } from './middleware/webSocket.js';  

// Extracts the file name path and directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize application
const app = express();
dotenv.config();
const PORT = process.env.PORT || 7000;
console.log(process.env.NODE_ENV);

// Connect to DB
mongoDb();

// Middlewares
app.use(logger);
app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOptions));

app.use('/', express.static(path.join(__dirname, '/public')));


app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/notes', noteRoutes);

app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, '/views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ message: '404 Not Found' });
    } else {
        res.type('txt').send('404 Not Found');
    }
});

app.use(errorHandler);

// Create HTTP server instance
const server = app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`);
});

//Launch server
setupWebSocket(server);

// Handle database connection events
mongoose.connection.once('open', () => {
    console.log('Connected to Database!!');
});

mongoose.connection.on('error', (err) => {
    console.log(err);
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log');
});