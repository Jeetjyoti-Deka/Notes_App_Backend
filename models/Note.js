const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: "" },
  date: { type: Date, required: true },
  priority: { type: Number, enum: [1, 2, 3, 4, 5], required: true }, // Enum for priority levels
  isCompleted: { type: Boolean, required: true, default: false },
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
