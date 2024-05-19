import User from '../../models/User.js';
import asyncHandler from 'express-async-handler';
import { broadcastMessage } from '../../middleware/webSocket.js';

// Get all users
//@ get/users
// Authorized
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find().select('-password').lean();

    // Error handling
    if (!users?.length){
        return res.status(404).json({ message: "Users not found" });
    }

    // Broadcast message
    broadcastMessage({
        event: 'users_fetched',
        users
    });

    res.status(200).json(users);
});

export default getUsers;
