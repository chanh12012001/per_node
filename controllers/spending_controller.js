const spendingService = require("../services/spending.services")

var functions = {
    createNewSpending: (req, res, next) => {
        spendingService.createNewSpending(req.body, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    },

    getAllSpending: (req, res, next) => {
        var userId = req.headers['userid']; 
        spendingService.getAllSpending(userId, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    },
}

module.exports = functions
