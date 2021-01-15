const { Schema, model } = require("mongoose");

const StarSchema = new Schema({
  name: String,
  age: Number,
  isAlive: Boolean,
  galaxy: { type: Schema.Types.ObjectId, ref: "galaxy" },
});

const Star = model("star", StarSchema);

module.exports = Star;
