const Album = require('../models/album_model')
const Image = require('../models/image_model')
const cloudinary = require('../config/cloudinary.config')

async function createNewAlbum(params, callback) {
    Album.create({
        name: params.name,
        userId: params.userId,  
    })
    .then((album) => {
        return callback(null, {message: 'Thêm thành công', album})
    })
    .catch((error) => {
        return callback(error)
    })
}

async function getAllAlbums(params, callback) {
    Album.find({userId: params})
    .then((albums) => {
        return callback(null, {albums})
    })
    .catch((error) => {
        return callback(error)
    })
}

async function deleteAlbum(params, callback) {
    Album.deleteOne({_id: params})
    .then((_) => { 
        Image.find({albumId: params}).then((images) => {
            for (var image of images) {
                cloudinary.cloudinary.v2.uploader.destroy(image.cloudinaryId)
            }
            Image.deleteMany({albumId: params}).then((_) => {     
                return callback(null, {message: 'Thao tác thành công'})
            })    
        })
          
    }) 
    .catch((error) => {
        return callback({message: 'Lỗi. Vui lòng thử lại!'})
    })
}

async function updateAlbum(paramsId, albumBody ,callback) {
    Album.findByIdAndUpdate(paramsId, {
        name: albumBody.name
    }).then((_) => {
        return callback(null, {message: 'Thao tác thành công'})
    })
    .catch((_) => {
        return callback({message: 'Lỗi. Vui lòng thử lại!'})
    })
}

module.exports = {
    createNewAlbum,
    getAllAlbums,
    deleteAlbum,
    updateAlbum,
}