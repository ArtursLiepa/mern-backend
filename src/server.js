const express = require("express");
const CORS = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const colors = require("colors");
const app = express();
app.use(CORS());
app.use(express.json());
const dns = require("dns");

const informationRoutes = require("../src/Modules/HeaderModule/Routes/header-routes");
const techRoutes = require("../src/Modules/Technologies/Routes/tech-routes");
const projectinfoRoutes = require("../src/Modules/ProjectModule/Routes/projectinfo-routes");
const navigationRoutes = require("../src/Modules/NavigationModule/Routes/navigationRoutes");
const userRoutes = require("../src/Modules/usersModule/Routes/userRoutes");
const emailRoutes = require("../src/Modules/EmailModule/Routes/emailRoutes");

dns.setDefaultResultOrder("ipv4first");

app.use("/information", informationRoutes);
app.use("/technologies", techRoutes);
app.use("/projectinfos", projectinfoRoutes);
app.use("/navigation", navigationRoutes);
app.use("/users", userRoutes);
app.use("/contact", emailRoutes);

// DB_URL = process.env.CLDB_URL;
const DB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${encodeURIComponent(
  process.env.DB_PASSWORD,
)}@${process.env.DB_CLUSTER}/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

dns.lookup("smtp.gmail.com", { all: true }, (err, addresses) => {
  console.log("DNS lookup:", addresses);
});

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
