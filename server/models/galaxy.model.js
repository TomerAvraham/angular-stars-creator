const { Schema, model } = require("mongoose");

const GalaxySchema = new Schema({
  name: String,
});

const Galaxy = model("galaxy", GalaxySchema);

module.exports = Galaxy;