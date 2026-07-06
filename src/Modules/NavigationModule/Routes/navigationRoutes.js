const express = require("express");
const router = express.Router();
const { getNavigation } = require("../Controller/navigationController");

router.get("/", getNavigation);

module.exports = router;
