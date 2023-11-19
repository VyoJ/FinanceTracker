const express = require("express");
const router = express.Router();
const Transaction = require("../models/transactionSchema");
const ObjectId = require("mongoose").Types.ObjectId;

router.post("/create", async (req, res) => {
  let transaction = new Transaction({
    user: req.body.user,
    description: req.body.description,
    to: req.body.to,
    from: req.body.from,
    amount: req.body.amount,
    date: req.body.date,
    mode: req.body.mode,
  });
  try {
    let savedTxn = await transaction.save();
    res.status(200).send(savedTxn);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Could not create transaction");
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedTxn = await Transaction.findByIdAndDelete(req.params.id);
    if (!deletedTxn) {
      return res.status(404).json({ error: "Transaction not found" });
    }
    res.status(200).json(deletedTxn);
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
