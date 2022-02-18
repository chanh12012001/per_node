const bcryptjs = require("bcryptjs");
const userService = require("../services/users.services")

var functions = {
    register: (req, res, next) => {
        const { password } = req.body
        const salt = bcryptjs.genSaltSync(10)
    
        req.body.password = bcryptjs.hashSync(password, salt)
    
        userService.register(req.body, (error, result) => {
            if (error) {
                return res.json(error)
            }
            return res.status(200).json(result)
        })
    },

    login: (req, res, next) => {
        const { email, password } = req.body
    
        userService.login({email, password}, (error, result) => {
            if (error) {
                return res.status(404).json(error)
            }
            return res.status(200).json(result) 
        })
    },

    logout: (req, res) => {
        res.status(200).send({ auth: false, token: null })
    }
}

module.exports = functions

