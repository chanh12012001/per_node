const jwt = require('jsonwebtoken')
const User = require('../models/user_model')
const config = require('../config/db.config')
const bcrypt = require('bcryptjs')

function generateAccessToken(id) {
    return jwt.sign({id: id}, config.secret, {
        expiresIn: '1h'
    }) 
}

async function register(params, callback) {
    var email = params.email
    const user = await User.findOne({email});

    if (user != null) {
        console.log(user.email)
        return callback({
            message: 'Email already exists.'
        })
    } else {
        User.create({
            username: params.username,
            email: params.email,
            password: params.password    
        })
        .then((data) => {
            const token = generateAccessToken(data._id)
            return callback(null, {auth: true, token})
        })
        .catch((error) => {
            return callback(error)
        })
    } 
}

async function login({email, password}, callback) {
    const user = await User.findOne({email});

    if (user != null) {
        if (bcrypt.compareSync(password, user.password)) {
            const token = generateAccessToken(user._id)
            return callback(null, {auth: true, token})
        }
        else {
            return callback({
                auth: false,
                token: null
            })
        }
    } else {
        return callback({
            message: 'The email doesn`t exist'
        })
    }
}

module.exports = {
    register,
    login
}