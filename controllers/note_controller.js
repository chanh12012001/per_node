const noteService = require("../services/notes.services")

var functions = {
    createNewNote: (req, res, next) => {
        const body = req.body
        const file = req.file

        noteService.createNewNote(body, file, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    },

    getAllNotes: (req, res, next) => {
        var userId = req.headers['userid']; 
        noteService.getAllNotes(userId, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    },

    deleteNote: (req, res, next) => {
        var noteId = req.params.id; 
        noteService.deleteNote(noteId, (error, results) => {
            if (error) {
                return res.status(500).json(error);
            }
            return res.status(200).json(results);
        });
    },
} 

module.exports = functions