const albumService = require('../services/albums.services')

var functions = {
    createNewAlbum: (req, res, next) => {
        albumService.createNewAlbum(req.body, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    },

    getAllAlbums: (req, res, next) => {
        var userId = req.headers['userid']; 
        albumService.getAllAlbums(userId, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    },
    
     deleteAlbum: (req, res, next) => {
        var albumId = req.params.id; 
        albumService.deleteAlbum(albumId, (error, results) => {
            if (error) {
                return res.status(500).json(error);
            }
            return res.status(200).json(results);
        });
    },
    
     updateAlbum: (req, res, next) => {
        var albumId = req.params.id; 
        var albumBody = req.body;
        albumService.updateAlbum(albumId, albumBody, (error, results) => {
            if (error) {
                return res.status(500).json(error);
            }
            return res.status(200).json(results);
        });
    }
}

module.exports = functions
