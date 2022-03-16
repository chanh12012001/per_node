const Album = require('../models/album_model')

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

module.exports = {
    createNewAlbum,
    getAllAlbums
}