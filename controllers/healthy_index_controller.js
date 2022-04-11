const healthyIndexService = require('../services/healthy_index.services')


var functions = {
    createNewHealthyIndex: async (req,res) => {
        const body = req.body
        const file = req.file

        healthyIndexService.createNewHealthyIndex(body, file, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        }) 
    },  

    getAllHealthyIndexs: (req, res, next) => {
        healthyIndexService.getAllHealthyIndexs((error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    },

    // deleteImagesOfAlbum: (req, res) => {
    //     var imageIds = req.params.ids.split(',')
        
    //     imagesAlbumService.deleteImagesOfAlbum(imageIds,  (error, results) => {
    //         if (error) {
    //             return res.status(500).json({error});
    //         }
    //         return res.status(200).json(results);
    //     });
    // }
}

module.exports = functions