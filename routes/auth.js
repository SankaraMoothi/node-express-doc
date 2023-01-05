const express = require("express");

const router = express.Router();

//login
router.post("/", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`welcom ${name}`);
  }
  res.status(401).send("Pleace Provide name");
});

module.exports = router;
