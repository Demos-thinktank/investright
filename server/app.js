const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const express = require("express");
const app = express();

mongoose.Promise = global.Promise;

const uri = process.env.MONGO_URL;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection
  .once("open", () => {
    console.log(
      "Connected to MongoDB successfully",
      new Date().toLocaleTimeString()
    );
  })
  .on("error", (error) => {
    console.log("Connection error: ", error);
  });

app.use(bodyParser.json());

app.use(cors());

// Log server requests for easier error identification
app.use(morgan("dev"));

// CORS Headers => Required for cross-origin/ cross-server communication
// nb - using cors instead of explicitly setting result headers
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PATCH, DELETE, OPTIONS"
//   );
//   next();
// });

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "..", "client", "build")));

// Backend routes
// app.use("/api/example", require("./routes/example-routes"));
app.use("/api/account", require("./routes/account"));

module.exports = app;
