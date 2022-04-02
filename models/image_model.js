const mongoose = require("mongoose");

const { Schema } = mongoose;

const ImageSchema = new Schema({
    createdAt: {
        type: Date
    },
    imageUrl: {
        type: String,
    },
    cloudinaryId: {
        type: String,
    },
    albumId: {
        type: String,
    },
});

ImageSchema.set("toJSON", {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;
    },
  });

const Image = mongoose.model("images", ImageSchema);

module.exports = Image;