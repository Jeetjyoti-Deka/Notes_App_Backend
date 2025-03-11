const Note = require("../models/Note");

const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
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

module.exports = { getAllNotes, createNote };
