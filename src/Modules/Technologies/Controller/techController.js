const express = require("express");
const technologies = require("../Model/techModel");

const getTech = async (req, res) => {
  try {
    const techList = await technologies.find({});
    console.log(techList);
    res.status(200).json(techList);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getTech };
