const Spending = require('../models/spending_model')

async function createNewSpending(params, callback) {
    Spending.create({
        kind: params.kind,
        money: params.money,
        date: params.date,
        userId: params.userId,  
    })
    .then((spending) => {
        return callback(null, {message: 'Thêm thành công', spending})
    })
    .catch((error) => {
        return callback(error)
    })
}

async function getAllSpending(params, callback) {
    Spending.find({userId: params})
    .then((spendings) => {
        return callback(null, {spendings})
    })
    .catch((error) => {
        return callback(error)
    })
}

module.exports = {
    createNewSpending,
    getAllSpending,
}
