const router = require("express").Router();
const Star = require("../models/star.model");

router.get("/all", async (req, res) => {
  try {
    const stars = await Star.find().populate({
      path: "galaxy",
    });
    res.status(200).send({ stars });
  } catch (error) {
    res.status(500).send({ error });
  }
});

router.post("/add", async (req, res) => {
  try {
    const { name, age, isAlive, galaxy } = req.body;
    const newStar = new Star({ name, age, isAlive, galaxy });
    await newStar.save();
    res.status(201).send({ newStar });
  } catch (error) {
    res.status(500).send({ error });
  }
});

module.exports = router;
