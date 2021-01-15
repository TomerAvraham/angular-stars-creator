const router = require("express").Router();
const Galaxy = require("../models/galaxy.model");

router.get("/all", async (req, res) => {
  try {
    const galaxies = await Galaxy.find();
    res.status(200).send({ galaxies });
  } catch (error) {
    res.status(500).send({ error });
  }
});

router.post("/add", async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).send({ message: "must have name" });
    }
    const newGalaxy = new Galaxy({
      name,
    });
    await newGalaxy.save();
    res.status(201).send({ newGalaxy});
  } catch (error) {
    res.status(500).send({ error });
  }
});

module.exports = router;
