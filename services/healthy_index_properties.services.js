const HealthyIndexProperties = require('../models/healthy_index_properties_model')
const cloudinary = require('../config/cloudinary.config')

async function createNewHealthyIndexProperties(body, callback) {
    HealthyIndexProperties.create({
        name: body.name,
        healthyIndexId: body.healthyIndexId,  
    })
    .then((healthyIndexProperties) => {
        return callback(null, {message: 'Thêm thành công', healthyIndexProperties})
    })
    .catch((error) => {
        return callback(error)
    })
}

async function getAllHealthyIndexProperties(healthyIndexId, callback) {
    HealthyIndexProperties.find({healthyIndexId: healthyIndexId})
    .then((healthyIndexProperties) => {
        return callback(null, {healthyIndexProperties})
    })
    .catch((error) => {
        return callback(error)
    })
}

async function deleteHealthyIndexProperties(params, callback) {
    HealthyIndexProperties.deleteOne({_id: params})
    .then((_) => {
        return callback(null, {message: 'Thao tác thành công'})
    })
    .catch((_) => {
        return callback({message: 'Lỗi. Vui lòng thử lại!'})
    })
}

module.exports = {
    createNewHealthyIndexProperties,
    getAllHealthyIndexProperties,
    deleteHealthyIndexProperties,
}