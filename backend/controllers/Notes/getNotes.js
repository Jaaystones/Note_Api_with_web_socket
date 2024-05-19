import Note from "../../models/Note.js";
import User from "../../models/User.js";
import asyncHandler from "express-async-handler";

// Get all notes
// @route GET /notes
// @access Private
const getNotes = asyncHandler(async (req, res) => {
    const notes = await Note.find().lean();

    // Error handling
    if (!notes?.length) {
        return res.status(404).json({ message: "No notes found" });
    }

    // Add username to each note before sending the response
    const notesWithUsername = await Promise.all(notes.map(async (note) => {
        const user = await User.findById(note.user).lean().exec();
        return { ...note, username: user.username };
    }));

    // Return result
    res.json(notesWithUsername);
});

export default getNotes;
