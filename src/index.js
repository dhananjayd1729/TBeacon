const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig.js");
const sqlite3 = require("sqlite3");

const ApiRoutes = require("./routes/index.js");

let db = new sqlite3.Database(":memory:", (err) => {
  if (err) {
    console.log("Error Occurred - " + err.message);
  } else {
    console.log("DataBase Connected");
  }
});

const setupAndStartServer = async () => {
  //create express object
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
  });
};

setupAndStartServer();
