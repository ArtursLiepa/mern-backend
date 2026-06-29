const express = require("express");
const router = express.Router();
const { getProjectInfo } = require("../Controller/projectinfoController");

router.get("/", getProjectInfo);

module.exports = router;
