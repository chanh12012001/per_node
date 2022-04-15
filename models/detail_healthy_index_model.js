const mongoose = require("mongoose");

const { Schema } = mongoose;

const DetailHealthyIndexSchema = new Schema({
    createAtDate: {
        type: String,
    },
    createAtTime: {
        type: String,
    },
    indexValue: {
        type: String,
    },
    healthyIndexId: {
        type: String,
    },
    userId: {
        type: String,
    }
});

DetailHealthyIndexSchema.set("toJSON", {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;
    },
  });


const DetailHealthyIndex = mongoose.model("detail-healthy-index", DetailHealthyIndexSchema);

module.exports = DetailHealthyIndex; 
