const express = require("express");
const { getAllNotes, createNote } = require("../controller/noteController");

const router = express.Router();

router.get("/notes", getAllNotes);
router.post("/notes", createNote);

module.exports = router;
