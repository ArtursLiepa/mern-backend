const mongoose = require("mongoose");
const { Schema } = mongoose;

const informationSchema = new Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  answers: { type: String, required: true },
  project: { type: String, required: true },
  thanks: { type: String, required: true },
  welcome: { type: String, required: true },
});

const information = mongoose.model("information", informationSchema);

module.exports = information;
