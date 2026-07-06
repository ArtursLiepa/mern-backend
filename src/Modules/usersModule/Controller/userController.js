const express = require("express");
const users = require("../Model/usersModel");

const createUser = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name || name.length < 3) {
      return res
        .status(400)
        .json({ message: "Name must be at least 3 characters" });
    }

    const user = await users.create({ name });
    console.log(user);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createUser };
