const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const commentModel = require("../Models/comment");

router.post("/", async (req, res) => {
  const { title, text, description } = req.body;

  new commentModel({
    title,
    text,
    description,
  }).save((data) => {
    if (data) {
      res.json({ msg: data });
    } else {
      res.json({ msg: "no data found " });
    }
  });
});

router.get("/", (req, res) => {
  commentModel.find({}).then((data) => {
    res.json({ msg: data });
  });
});

module.exports = router;
