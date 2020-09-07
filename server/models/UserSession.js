const mongoose = require("mongoose");

// Using method of storing user sessions in the database, now using local storage
const UserSessionSchema = new mongoose.Schema({
  userId: {
    type: String,
    default: "",
  },
  timeStamp: {
    type: Date,
    default: Date.now(),
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// module.exports = mongoose.model("UserSession", UserSessionSchema);
