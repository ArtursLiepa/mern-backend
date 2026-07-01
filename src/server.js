const express = require("express");
const CORS = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const colors = require("colors");
const app = express();
app.use(CORS());
app.use(express.json());

const informationRoutes = require("../src/Modules/HeaderModule/Routes/header-routes");
const techRoutes = require("../src/Modules/Technologies/Routes/tech-routes");
const projectinfoRoutes = require("../src/Modules/ProjectModule/Routes/projectinfo-routes");

app.use("/information", informationRoutes);
app.use("/technologies", techRoutes);
app.use("/projectinfos", projectinfoRoutes);

// DB_URL = process.env.CLDB_URL;
const DB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${encodeURIComponent(
  process.env.DB_PASSWORD,
)}@${process.env.DB_CLUSTER}/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

async function startServer() {
  await mongoose
    .connect(DB_URL)
    .then(() => {
      console.log("Database connected!".bgGreen);
      const PORT = process.env.PORT || 3005;
      app.listen(PORT, () => {
        console.log(`App is listening on port ${PORT}`);
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
