const accountService = require('../services/accounts.services')

var functions = {
    createNewAccount: (req, res, next) => {
        accountService.createNewAccount(req.body, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    },

    getAllAccounts: (req, res, next) => {
        var userId = req.headers['userid']; 
        accountService.getAllAccounts(userId, (error, results) => {
            if (error) {
                return res.status(500).json({error});
            }
            return res.status(200).json(results);
        });
    },

    deleteAccount: (req, res, next) => {
        var accountId = req.params.id; 
        accountService.deleteAccount(accountId, (error, results) => {
            if (error) {
                return res.status(500).json(error);
            }
            return res.status(200).json(results);
        });
    },

    updateAccount: (req, res, next) => {
        var accountId = req.params.id; 
        var body = req.body;
        accountService.updateAccount(body, accountId, (error, results) => {
            if (error) {
                return res.status(500).json(error);
            }
            return res.status(200).json(results);
        });
    }
}

module.exports = functions