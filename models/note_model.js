const mongoose = require("mongoose");

const { Schema } = mongoose;

const NoteSchema = new Schema({
    createdAt: {
        type: Date
    },
    title: {
        type: String
    },
    content: {
        type: String
    },
    imageUrl: {
        type: String,
    },
    cloudinaryId: {
        type: String,
    },
    userId: {
        type: String,
    },
});

NoteSchema.set("toJSON", {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;
    },
  });

const Note = mongoose.model("notes", NoteSchema);

module.exports = Note;