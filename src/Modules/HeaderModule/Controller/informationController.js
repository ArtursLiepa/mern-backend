const express = require("express");
const information = require("../Model/informationModel");

const getInformationTitle = async (req, res) => {
  try {
    // const category = req.query.categoryName;
    const informationTitle = await information.findOne({});
    console.log(informationTitle);
    res.status(200).json(informationTitle);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getInformationTitle };
