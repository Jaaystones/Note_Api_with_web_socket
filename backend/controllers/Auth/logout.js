import { broadcastMessage } from '../../middleware/webSocket.js';

// @desc Logout
// @route POST /auth/logout
// @access Public - just to clear cookie if exists
const logout = (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // No content

    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    res.json({ message: 'Cookie cleared, Logged out' });

    // Broadcast logout event to WebSocket clients
    broadcastMessage({
        event: 'user_logged_out',
        message: 'Logged out'   
    });
}

export default logout;
