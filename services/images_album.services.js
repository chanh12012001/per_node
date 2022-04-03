const cloudinary = require('../config/cloudinary.config')
const fs = require('fs')
const Image = require('../models/image_model')

async function uploadImagesToAlbum(albumId, files, callback) {
    const uploader = async (path) => await cloudinary.uploads(path, 'per-note/images-album')
    const images = [];
    
    for (const file of files) {
        const { path } = file 
     
        const newPath = await uploader(path)
                
        const image = Image({
            createdAt: Date.now(),
            imageUrl: newPath.url,
            cloudinaryId: newPath.id,
            albumId: albumId,
        })

        images.push(image)
    
        fs.unlinkSync(path)
    }

    Image.insertMany(images)
    .then((images) => {
        return callback(null, {message: 'Thêm thành công', images})
    })
    .catch((err) => {
        return callback(err)
    })  
}

async function getAllImagesByAlbumId(params, callback) {
    Image.find({albumId: params})
    .then((images) => {
        return callback(null, {images})
    })
    .catch((error) => {
        return callback(error)
    })
}

async function deleteImagesOfAlbum(imageIds, callback) {

    for (var imageId of imageIds) {
        Image.findOne({_id: imageId}).then((image) => {
             cloudinary.cloudinary.v2.uploader.destroy(image.cloudinaryId)
        })
    }  

    Image.deleteMany({_id: {$in: imageIds}})
    .then((_) => {
        return callback(null, {message: 'Thao tác thành công'})
    })
    .catch((error) => {
        return callback({message: 'Lỗi. Vui lòng thử lại!'})
    })
}

module.exports = {
    uploadImagesToAlbum,
    getAllImagesByAlbumId,
    deleteImagesOfAlbum
}