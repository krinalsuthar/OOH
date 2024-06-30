// const { types } = require("joi");
const mongoose = require("mongoose");
const reserveSchema = new mongoose.Schema({
  checkIn: {
    type: Date,
    default: Date.now(),
  },
  checkOut: {
    type: Date,
    default: Date.now(),
  },
  user: {
    type: String,
  },
  idRef: {
    type: String,
    require: true,
  },
  suggestion: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const reserve = new mongoose.model("reserve", reserveSchema);
module.exports = reserve;
