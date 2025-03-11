const Note = require("../models/Note");

const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json({ success: true, notes });
  } catch (error) {
    res.status(500).json({ error: "Error fetching notes" });
  }
};

module.exports = { getAllNotes };
