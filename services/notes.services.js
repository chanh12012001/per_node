const Note = require('../models/note_model')
const cloudinary = require('../config/cloudinary.config')
const fs = require('fs')
const date = require('date-and-time')

async function createNewNote(body, file, callback) {

    const uploader = async (path) => await cloudinary.uploads(path, 'per-note/images-note') || ""

    const createdAt = date.format(new Date(), 'DD/MM/YYYY HH:mm:ss');
    
    const path = file!= null ? file.path : ""
     
    const newPath = file!= null  ? await uploader(path) : ""
            
    const note = Note({ 
        createdAt: createdAt,
        title: body.title,
        content: body.content,
        imageUrl: file!= null ? newPath.url : "",
        cloudinaryId: file!= null ? newPath.id : "",
        userId: body.userId,
    })

    if (file!= null)
        fs.unlinkSync(path)

    Note.create(note)
    .then((note) => {
        return callback(null, {message: 'Thêm thành công', note})
    })
    .catch((err) => {
        return callback(err)
    })  
}

async function getAllNotes(userId, callback) {
    Note.find({userId: userId})
    .then((notes) => {
        return callback(null, {notes})
    })
    .catch((error) => {
        return callback(error)
    })
}

async function deleteNote(params, callback) {
    Note.deleteOne({_id: params})
    .then((tasks) => {
        return callback(null, {message: 'Thao tác thành công'})
    })
    .catch((error) => {
        return callback({message: 'Lỗi. Vui lòng thử lại!'})
    })
}

async function updateNote(noteId, body, file ,callback) {
    var result;
    const uploader = async (path) => await cloudinary.uploads(path, 'per-note/images-note')
    if (file != undefined || file != null) {
        result = await uploader(file.path)
    }
    Note.findById(noteId) 
    .then((note) => {  
        if (file != undefined || file != null) {
            cloudinary.cloudinary.v2.uploader.destroy(note.cloudinaryId)
            const data = {
                title: body.title || note.title,
                content: body.content || note.content,
                imageUrl: result.url,
                cloudinaryId: result.id
            }
            Note.findByIdAndUpdate(noteId, data, {new: true}).then((note) => {         
                return callback(null, {message: 'Thao tác thành công', note})
            })
        } else {
            const data = {
                title: body.title || note.title,
                content: body.content || note.content,
                imageUrl: note.imageUrl,
                cloudinaryId: note.cloudinaryId,
            }
            Note.findByIdAndUpdate(noteId, data, {new: true}).then((note) => {         
                return callback(null, {message: 'Thao tác thành công', note})
            })
        }
    })
    .catch ((err) => {
        return callback({message: 'Lỗi. Vui lòng thử lại!'})
    })
}

module.exports = {
    createNewNote,
    getAllNotes,
    deleteNote,
    updateNote,
}