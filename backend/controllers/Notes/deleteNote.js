import Note from "../../models/Note.js";
import asyncHandler from "express-async-handler";
import { broadcastMessage } from "../../middleware/webSocket.js";

// Delete a note
// @route DELETE /notes
// @access Private
const deleteNote = asyncHandler(async (req, res) => {
    const { id } = req.body;

    // Confirm data
    if (!id) {
        return res.status(400).json({ message: 'Note ID required' });
    }

    // Confirm note exists to delete 
    const note = await Note.findById(id).exec();

    // Error handling
    if (!note) {
        return res.status(404).json({ message: 'Note not found' });
    }

    // Delete note
    await note.deleteOne();

    // Broadcast message to WebSocket clients
    broadcastMessage({
        event: 'note_deleted',
        noteId: id
    });

    res.json(`Note with ID ${id} deleted`);
});

export default deleteNote;
