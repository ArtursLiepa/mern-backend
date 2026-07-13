const mongoose = require("mongoose");
const { Schema } = mongoose;

const navSchema = new Schema({
  name: { type: String, required: true },
});

const navitems = mongoose.model("navitems", navSchema);

module.exports = navitems;
