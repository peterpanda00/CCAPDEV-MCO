const mongoose = require('mongoose')

const Schema = mongoose.Schema


const roomSchema = new Schema(
  {
    roomName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    addPrice: {
      type: Number,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    roomImg:{
        type: String
    },
    roomNumbers: [{ number: Number, unavailableDates: {type: [Date]}}],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Room", roomSchema);