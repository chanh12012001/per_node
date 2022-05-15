const Account = require('../models/account_model')

async function createNewAccount(params, callback) {
    Account.create({
        title: params.title,
        username: params.username,
        password: params.password,
        note: params.note,
        userId: params.userId,  
    })
    .then((account) => {
        return callback(null, {message: 'Thêm thành công', account})
    })
    .catch((error) => {
        return callback(error)
    })
}

async function getAllAccounts(params, callback) {
    Account.find({userId: params})
    .then((accounts) => {
        return callback(null, {accounts})
    })
    .catch((error) => {
        return callback(error)
    })
}

async function deleteAccount(params, callback) {
    Account.deleteOne({_id: params})
    .then((_) => {
        return callback(null, {message: 'Thao tác thành công'})
    })
    .catch((_) => {
        return callback({message: 'Lỗi. Vui lòng thử lại!'})
    })
}

async function updateAccount(body, accountId, callback) {
    const data = {
        title: body.title,
        username: body.username,
        password: body.password,
        note: body.note,
    }
    Account.findByIdAndUpdate(accountId, data, {new: true}).then((_) => {
        return callback(null, {message: 'Thao tác thành công'})
    })
    .catch((error) => {
        return callback({message: 'Lỗi. Vui lòng thử lại!'})
    })
}

module.exports = {
    createNewAccount,
    getAllAccounts,
    deleteAccount,
    updateAccount,
}