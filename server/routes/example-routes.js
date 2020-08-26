const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).send("The example API home route");
  next();
});

router.get("/:param1", (req, res, next) => {
  const params = req.params;
  res.status(200).json([params]);
  next();
});

router.get("/:param1/:param2", (req, res, next) => {
  const params = req.params;
  res.status(200).json([params]);
  next();
});

module.exports = router;
