const express = require("express");
const router = express.Router();
const { getTech } = require("../Controller/informationController");

router.get("/", getTech);

module.exports = router;
