const mongoose = require("mongoose");

const { Schema } = mongoose;

const SpendingSchema = new Schema({
  kind: {
    type: String,
  },
  money: {
    type: Number,
  },
  date: {
    type: String,
  },
  userId: {
    type: String,
  },
});

const Spending = mongoose.model("spending", SpendingSchema);

module.exports = Spending;