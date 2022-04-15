const detailHealthyIndexService = require('../services/detail_healthy_index.services')

var functions = {
    createNewDetailHealthyIndex: async (req, res) => {
        const body = req.body

        detailHealthyIndexService.createNewDetailHealthyIndex(body, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        }) 
    },  

    getAllDetailHealthyIndexByUserId: (req, res, next) => {
        var healthyIndexId = req.params.id
        var userId = req.headers['userid']; 
        detailHealthyIndexService.getAllDetailHealthyIndexByUserId(healthyIndexId, userId, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    },

    deleteDetailHealthyIndex: (req, res) => {
        var detailHealthyIndexId = req.params.id
        
        detailHealthyIndexService.deleteDetailHealthyIndex(detailHealthyIndexId,  (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    }
}

module.exports = functions