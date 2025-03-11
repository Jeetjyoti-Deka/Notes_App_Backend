const express = require("express");
const { getAllNotes } = require("../controller/noteController");

const router = express.Router();

router.get("/notes", getAllNotes);

module.exports = router;
