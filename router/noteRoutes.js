const express = require("express");
const {
  getAllNotes,
  createNote,
  deleteNote,
  editNote,
} = require("../controller/noteController");

const router = express.Router();

router.get("/notes", getAllNotes);
router.post("/notes", createNote);
router.delete("/notes/:id", deleteNote);
router.put("/notes/:id", editNote);

module.exports = router;
