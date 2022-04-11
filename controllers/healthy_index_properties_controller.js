const healthyIndexPropertiesService = require('../services/healthy_index_properties.services')

var functions = {
    createNewHealthyIndexProperties: async (req,res) => {
        const body = req.body

        healthyIndexPropertiesService.createNewHealthyIndexProperties(body, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        }) 
    },  

    getAllHealthyIndexProperties: (req, res, next) => {
        var healthyIndexId = req.headers['healthyindexid']; 
        healthyIndexPropertiesService.getAllHealthyIndexProperties(healthyIndexId, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    },

    deleteHealthyIndexProperties: (req, res) => {
        var healthyIndexPropertiesId = req.params.id
        
        healthyIndexPropertiesService.deleteHealthyIndexProperties(healthyIndexPropertiesId,  (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    }
}

module.exports = functions