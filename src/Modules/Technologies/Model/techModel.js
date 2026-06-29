const mongoose = require("mongoose");
const { Schema } = mongoose;

const techSchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  status: { type: String, required: true },
});

const tech = mongoose.model("tech", techSchema);

module.exports = tech;
