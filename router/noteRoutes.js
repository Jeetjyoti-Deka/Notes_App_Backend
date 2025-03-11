const express = require("express");
const {
  getAllNotes,
  createNote,
  deleteNote,
} = require("../controller/noteController");

const router = express.Router();

router.get("/notes", getAllNotes);
router.post("/notes", createNote);
router.delete("/notes/:id", deleteNote);

module.exports = router;
