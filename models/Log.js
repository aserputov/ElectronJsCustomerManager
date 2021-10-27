const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const LogSchema = new Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "Log text is required"],
  },
  language: {
    type: String,
    default: "ge",
    enum: ["ge", "en", "ru"],
  },
  phone: {
    type: Number,
    trim: true,
    required: [true, "User  is required"],
    unique: true,
  },
  comment: {
    type: String,
    default: "",
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Log", LogSchema);
