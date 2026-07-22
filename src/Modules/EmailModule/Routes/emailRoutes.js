const express = require("express");
const router = express.Router();
// const { sendEmail } = require("../Controller/emailController");
const { sendEmailResend } = require("../Controller/emailControllerResend");

// router.post("/", sendEmail);
router.post("/", sendEmailResend);

module.exports = router;
