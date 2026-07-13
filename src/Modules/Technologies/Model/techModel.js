const mongoose = require("mongoose");
const { Schema } = mongoose;

const techSchema = new Schema({
  name: { type: String, required: true },
  status: { type: String, required: true },
});

const technologies = mongoose.model("technologies", techSchema);

module.exports = technologies;
