const express = require("express");
const User = require("../models/User");
const router = express.Router();
const auth = require("../middleware/auth");

router.get("/profile", auth, async (req, res) => {
  // console.log("req.user endpount");
  // decide on values to send
  res.send(req.user);
});

router.post("/signup", async (req, res) => {
  // Create a new user
  try {
    const user = new User(req.body);
    await user.save();
    const token = await user.generateAuthToken().catch(console.log);
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    // Custom function defined y Maria - see notes in User model
    const user = await User.findByCredentials(email, password).catch(
      console.log
    );
    console.log(user);
    if (!user) {
      return res
        .status(401)
        .send({ error: "Login failed! Check authentication credentials" });
    }
    const token = await user.generateAuthToken().catch(console.log);
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token != req.token;
    });
    await req.user.save();
    res.send("success");
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/logoutall", auth, async (req, res) => {
  // Log user out of all devices
  try {
    req.user.tokens.splice(0, req.user.tokens.length);
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
