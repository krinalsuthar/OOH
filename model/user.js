const mongoose = require("mongoose");
const reserve = require("./reserve.js");
const passMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  upi: {
    type: String,
    require: true,
  },
});

userSchema.plugin(passMongoose);

module.exports = mongoose.model("user", userSchema);
