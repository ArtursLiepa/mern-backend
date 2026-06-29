const express = require("express");
const projectinfos = require("../Model/projectInfoModel");

const getProjectInfo = async (req, res) => {
  try {
    const projectInfo = await projectinfos.findOne({});
    console.log(projectInfo);
    res.status(200).json(projectInfo);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getProjectInfo };
