const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectInfoSchema = new Schema({
  name: { type: String, required: true },
});

const projectinfos = mongoose.model("projectinfos", projectInfoSchema);

module.exports = projectinfos;
