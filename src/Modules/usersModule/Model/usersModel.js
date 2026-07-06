const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, requied: true },
    source: { type: String, requied: true },
    company: { type: String, requied: true },
  },
  { timestamps: true },
);

const users = mongoose.model("users", userSchema);

module.exports = users;
