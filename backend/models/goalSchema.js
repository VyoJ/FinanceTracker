let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let GoalSchema = new Schema({
  user: { type: String, required: true },
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  period: { type: Number, required: true },
});

module.exports = mongoose.model("Goal", GoalSchema);