const mongoose = require("mongoose");
const { Schema } = mongoose;

const emailSchema = new Schema(
  {
    name: { type: String, requied: true },
    email: { type: String, required: true },
    subject: { type: String, requied: true },
    message: { type: String, requied: true },
    emailStatus: { type: String, requied: true },
    messageId: { type: String, requied: true },
    smtpResponse: { type: String, requied: true },
  },
  { timestamps: true },
);

const emails = mongoose.model("emails", emailSchema);

module.exports = emails;
