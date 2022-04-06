const noteController = require('../controllers/note_controller')
const express = require('express')
const upload = require('../config/multer.config')
const router = express.Router()

router.post("/create-new-note", upload.single('image'), noteController.createNewNote);

router.get("/get-all-notes", noteController.getAllNotes);

router.delete("/deleteNote/:id", noteController.deleteNote);

module.exports = router