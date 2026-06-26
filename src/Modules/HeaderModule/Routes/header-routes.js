const express = require("express");
const router = express.Router();
const { getInformationTitle } = require("../Controller/informationController");

router.get("/", getInformationTitle);

module.exports = router;
