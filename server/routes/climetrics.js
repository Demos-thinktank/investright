const express = require("express");
const mongoose = require("mongoose");
// const User = require("../models/User");
const router = express.Router();
const auth = require("../middleware/auth");

router.get("/funds", auth, async (req, res) => {
    mongoose.connection.db.collection("Climetrics-sample", async function (
        err,
        collection
      ) {
        const funds = await collection
          .find({})
          .toArray();
          res.send(funds)
      });
})

module.exports = router