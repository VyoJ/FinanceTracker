const express = require("express");
const router = express.Router();
const Goal = require("../models/goalSchema");

router.get("/view", async (req, res) => {
  try {
    let goals = await Goal.find({});
    console.log(goals);
    return res.status(200).send(goals);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Could not get goals");
  }
});

router.post("/create", async (req, res) => {
  let goal = new Goal({
    user: req.body.user,
    title: req.body.description,
    amount: req.body.amount,
    period: req.body.period,
  });
  try {
    let savedGoal = await goal.save();
    res.status(200).send(savedGoal);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Could not create goal");
  }
});

module.exports = router;
