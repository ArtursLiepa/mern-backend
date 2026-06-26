const mongoose = require("mongoose");
const { Schema } = mongoose;

const informationSchema = new Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
});

const information = mongoose.model("information", informationSchema);

module.exports = information;
