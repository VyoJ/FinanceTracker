const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");

router.post("/signup", async (req, res) => {
  req.body.password = await bcrypt.hash(req.body.password, 10);
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    let savedUser = await user.save();
    const token = jwt.sign({ userId: savedUser._id }, "my-secret-key");
    res
      .status(200)
      .send({ token, userId: savedUser._id, email: savedUser.email, name: savedUser.name });
  } catch (error) {
    return res.status(401).send("Invalid email or password");
  }
});

router.post("/login", async (req, res) => {
  try {
    console.log(req)
    console.log("Logging in")
    let getUser = await User.findOne({ email: req.body.email });
    console.log(getUser);
    if (!getUser) {
      return res.status(401).send("Invalid email or password");
    }
    const result = await bcrypt.compare(req.body.password, getUser.password);
    if (result) {
      const token = jwt.sign({ userId: getUser._id }, "my-secret-key");
      res.json({ token, userId: getUser._id, email: getUser.email, name: getUser.name });
    } else {
      res.status(400).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
