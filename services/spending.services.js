const Spending = require('../models/spending_model')

async function createNewSpending(params, callback) {
    Task.create({
        kind: params.kind,
        money: params.money,
        date: params.date,
        userId: params.userId,  
    })
    .then((task) => {
        return callback(null, {message: 'Thêm thành công', task})
    })
    .catch((error) => {
        return callback(error)
    })
}

async function getAllSpending(params, callback) {
    Task.find({userId: params})
    .then((tasks) => {
        return callback(null, {tasks})
    })
    .catch((error) => {
        return callback(error)
    })
}

module.exports = {
    createNewSpending,
    getAllSpending,
}