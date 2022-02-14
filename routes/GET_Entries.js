const express = require("express");
const router = express.Router();
const Entry = require("../models/Entry");

router.get("/", async (req, res) => {
  try {
    const entries = await Entry.find({});
    res.send(entries);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ errors: [{ msg: "Server Error" }] });
  }
});

module.exports = router;
