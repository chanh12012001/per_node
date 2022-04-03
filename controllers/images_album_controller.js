const imagesAlbumService = require('../services/images_album.services')


var functions = {
    uploadImagesToAlbum: async (req,res) => {
        const { albumId } = req.body
        const files= req.files

        imagesAlbumService.uploadImagesToAlbum(albumId, files, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        }) 
    },  

    getAllImagesByAlbumId: (req, res, next) => {
        var albumId = req.headers['albumid']; 
        imagesAlbumService.getAllImagesByAlbumId(albumId, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    },

    deleteImagesOfAlbum: (req, res) => {
        var imageIds = req.params.ids.split(',')
        
        imagesAlbumService.deleteImagesOfAlbum(imageIds,  (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    }
}

module.exports = functions