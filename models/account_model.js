const mongoose = require("mongoose");

const { Schema } = mongoose;

const AccountSchema = new Schema({
  title: {
    type: String,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  note: {
    type: String,
  },
  userId: {
    type: String,
  },
});

AccountSchema.set("toJSON", {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;
    },
  });

const Account = mongoose.model("accounts", AccountSchema);

module.exports = Account;