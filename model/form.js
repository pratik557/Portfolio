const mongoose = require("mongoose");

const FORM_SCHEMA = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: false,
    },
    comment: {
      type: String,
      default: "Hello,How are you?",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", FORM_SCHEMA);
