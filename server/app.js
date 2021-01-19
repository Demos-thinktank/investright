const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
// if (process.env.NODE_ENV !== "production") {
require("dotenv").config();
// }
const express = require("express");
const app = express();

mongoose.Promise = global.Promise;

const uri = process.env.MONGO_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection
  .once("open", () => {
    console.log(
      "Connected to MongoDB successfully",
      new Date().toLocaleTimeString()
    );
  })
  .on("error", (error) => {
    console.error("MongoDB Connection error: ", error);
  });

app.use(bodyParser.json());

app.use(cors());

// Log server requests for easier error identification
app.use(morgan("dev"));

// Backend routes
// app.use("/api/example", require("./routes/example-routes"));
app.use("/api/account", require("./routes/account"));
app.use("/api/climetrics", require("./routes/climetrics"));

// Serve static files from the React app
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "..", "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "build"));
  });
}

module.exports = app;
