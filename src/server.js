const express = require("express");
const CORS = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const colors = require("colors");
const app = express();
app.use(CORS());
app.use(express.json());

const informationRoutes = require("../src/Modules/HeaderModule/Routes/header-routes");

app.use("/information", informationRoutes);

// DB_URL = process.env.DB_URL;
DB_URL = process.env.CLDB_URL;
API_URL = process.env.API_URL;

async function startServer() {
  await mongoose
    .connect(DB_URL)
    .then(() => {
      console.log("Database connected!".bgGreen);
      app.listen(API_URL, () => {
        console.log(`App is listening on port ${API_URL}`);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

startServer();
