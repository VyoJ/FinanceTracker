let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let TransactionSchema = new Schema({
  user: { type: String, required: true },
  description: { type: String, required: true },
  to: { type: String },
  from: { type: String },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  mode: { type: String, required: true }
});

module.exports = mongoose.model("Transaction", TransactionSchema);