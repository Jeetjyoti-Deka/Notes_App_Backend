const Note = require("../models/Note");

const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().select("-__v");
    res.status(200).json({ success: true, notes });
  } catch (error) {
    res.status(500).json({ error: "Error fetching notes" });
  }
};

const createNote = async (req, res) => {
  try {
    const noteData = req.body;
    const result = await Note.create(noteData);

    res
      .status(201)
      .json({ message: "Note created successfully", note: result });
  } catch (error) {
    console.error("Error creating note:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteNote = async (req, res) => {
  try {
    const noteId = req.params.id;
    if (!noteId) {
      return res.status(400).json({ error: "missing Id" });
    }

    const deletedNote = await Note.findByIdAndDelete(noteId);

    if (!deletedNote) {
      return res.status(404).json({ error: "Note not found" });
    }

    res.status(200).json({ message: "note deleted" });
  } catch (error) {
    console.error("Error deleting note:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const editNote = async (req, res) => {
  try {
    const noteId = req.params.id;
    if (!noteId) {
      return res.status(400).json({ error: "missing Id" });
    }

    const { note } = req.body;

    const updatedNote = await Note.findByIdAndUpdate(noteId, note, {
      new: true,
      runValidators: true,
    });

    if (!updatedNote) {
      return res.status(404).json({ error: "Note not found" });
    }

    res.status(200).json({ success: true, note: updatedNote });
  } catch (error) {
    console.error("Error deleting note:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getAllNotes, createNote, deleteNote, editNote };
