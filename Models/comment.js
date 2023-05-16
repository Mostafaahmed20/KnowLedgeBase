// api for B2b requests
const mongoose = require("mongoose");

const B2BSchema = mongoose.Schema(
  {
    HotelName: { type: String },
    CheckIn: { type: Date, set: (value) => new Date(value) },
    CheckOut: { type: Date, set: (value) => new Date(value) },
    NumberOfPax: { type: Number },
    Nationality: { type: String },
    NumberOfUnits: { type: Number },
    RoomType: { String },
    CancelationPolicy: { type: String },
    Price: { type: String },
    Note: { type: String },
  },
  { timestamps: true }
);

const B2BSModel = mongoose.model("B2BSchema", B2BSchema);

module.exports = B2BSModel;
