const DetailHealthyIndex = require('../models/detail_healthy_index_model')

async function createNewDetailHealthyIndex(body, callback) {
    DetailHealthyIndex.create({
        createAtDate: body.createAtDate,
        createAtTime: body.createAtTime,  
        indexValue: body.indexValue,
        healthyIndexId: body.healthyIndexId,
        userId: body.userId,
    })
    .then((detailHealthyIndex) => {
        return callback(null, {message: 'Thêm thành công', detailHealthyIndex})
    })
    .catch((error) => {
        return callback(error)
    })
}

async function getAllDetailHealthyIndexByUserId(healthyIndexId, userId, callback) {
    DetailHealthyIndex.find({healthyIndexId: healthyIndexId, userId: userId})
    .then((detailHealthyIndexs) => {
        return callback(null, {detailHealthyIndexs})
    })
    .catch((error) => {
        return callback(error)
    })
}

async function deleteDetailHealthyIndex(id, callback) {
    DetailHealthyIndex.deleteOne({_id: id})
    .then((_) => {
        return callback(null, {message: 'Thao tác thành công'})
    })
    .catch((_) => {
        return callback({message: 'Lỗi. Vui lòng thử lại!'})
    })
}

module.exports = {
    createNewDetailHealthyIndex,
    getAllDetailHealthyIndexByUserId,
    deleteDetailHealthyIndex,
}