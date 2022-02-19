const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  stock: {
    type: Number,
  },
  create: {
      type: Date,
      default: Date.now
  }
});

const Product = mongoose.model("products", ProductSchema);

module.exports = Product;

module.exports.get = function(callback, limit) {
  Product.find(callback).limit(limit);
}