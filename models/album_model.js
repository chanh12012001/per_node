const mongoose = require("mongoose");

const { Schema } = mongoose;

const AlbumSchema = new Schema({
  name: {
    type: String,
  },
  userId: {
    type: String,
  },
});

const Album = mongoose.model("albums", AlbumSchema);

module.exports = Album;