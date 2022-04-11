const mongoose = require("mongoose");

const { Schema } = mongoose;

const HealthyIndexSchema = new Schema({
    name: {
        type: String,
    },
    iconUrl: {
        type: String,
    },
    cloudinaryId: {
        type: String,
    },
    unit: {
        type: String,
    }
});

const HealthyIndex = mongoose.model("healthy-indexs", HealthyIndexSchema);

module.exports = HealthyIndex;