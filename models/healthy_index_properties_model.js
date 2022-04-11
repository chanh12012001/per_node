const mongoose = require("mongoose");

const { Schema } = mongoose;

const HealthyIndexPropertiesSchema = new Schema({
    name: {
        type: String,
    },
    healthyIndexId: {
        type: String,
    }
});

const HealthyIndexProperties = mongoose.model("healthy-index-properties", HealthyIndexPropertiesSchema);

module.exports = HealthyIndexProperties;