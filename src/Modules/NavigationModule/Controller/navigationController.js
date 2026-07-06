const express = require("express");
const navitems = require("../Model/navigationModel");

const getNavigation = async (req, res) => {
  try {
    const navList = await navitems.find({});
    console.log(navList);
    res.status(200).json(navList);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getNavigation };
