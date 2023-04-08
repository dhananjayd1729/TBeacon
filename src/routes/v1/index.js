const express = require("express");
// const CityController = require("../../controllers/city-controller");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Assignment");
});

module.exports = router;
