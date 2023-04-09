const express = require("express");
var cors = require("cors");
const csv = require("csv-parser");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig.js");
const fs = require("fs");

const sqlite3 = require("sqlite3").verbose();
const app = express();
app.use(cors());

// Open a database connection
const db = new sqlite3.Database("nifty.db");

const setupAndStartServer = async () => {
  //create express object

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
  });
};

setupAndStartServer();

// // Create a table for the CSV data
// db.run(
//   "CREATE TABLE stocks (id INTEGER PRIMARY KEY, date TEXT, price REAL, instrument_name TEXT)"
// );

// // Read the CSV file and insert each row into the database
// fs.createReadStream("historical_prices.csv")
//   .pipe(csv())
//   .on("data", (row) => {
//     db.run(
//       `INSERT INTO stocks (id, date, price, instrument_name) VALUES (?, ?, ?, ?)`,
//       [row.id, row.date, row.price, row.instrument_name]
//     );
//   })
//   .on("end", () => {
//     console.log("CSV data successfully inserted into database");
//     db.close();
//   });

// Define the API endpoint
app.get("/historical-data", (req, res) => {
  const symbol = req.query.symbol;
  const from_date = req.query.from_date;
  const to_date = req.query.to_date;

  // Query the database for data
  db.all(
    `SELECT * FROM stocks WHERE instrument_name = ? AND date >= ? AND date <= ?`,
    [symbol, from_date, to_date],
    (err, rows) => {
      if (err) {
        console.error(err.message);
        res.status(500).send("Internal Server Error");
      } else {
        res.send(rows);
      }
    }
  );
});
