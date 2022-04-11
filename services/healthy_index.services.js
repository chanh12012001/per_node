const cloudinary = require('../config/cloudinary.config')
const fs = require('fs')
const HealthyIndex = require('../models/healthy_index_model')

async function createNewHealthyIndex(body, file, callback) {
    const uploader = async (path) => await cloudinary.uploads(path, 'per-note/healthy-indexs')

    const newPath = await uploader(file.path)
                
    const healthyIndex = HealthyIndex({
        name: body.name,
        iconUrl: newPath.url,
        cloudinaryId: newPath.id,
        unit: body.unit,
    })
    
    fs.unlinkSync(file.path)

    HealthyIndex.create(healthyIndex)
    .then((healthyIndex) => {
        return callback(null, {message: 'Thêm thành công', healthyIndex})
    })
    .catch((err) => {
        return callback(err)
    })  
}

async function getAllHealthyIndexs(callback) {
    HealthyIndex.find()
    .then((healthy_indexs) => {
        return callback(null, {healthy_indexs})
    })
    .catch((error) => {
        return callback(error)
    })
}

// async function deleteImagesOfAlbum(imageIds, callback) {

//     for (var imageId of imageIds) {
//         Image.findOne({_id: imageId}).then((image) => {
//              cloudinary.cloudinary.v2.uploader.destroy(image.cloudinaryId)
//         })
//     }  

//     Image.deleteMany({_id: {$in: imageIds}})
//     .then((_) => {
//         return callback(null, {message: 'Thao tác thành công'})
//     })
//     .catch((error) => {
//         return callback({message: 'Lỗi. Vui lòng thử lại!'})
//     })
// }

module.exports = {
    createNewHealthyIndex,
    getAllHealthyIndexs,
}