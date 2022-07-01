const mongoose = require("mongoose");
const { isEmail } = require("validator");
const userSchema = new mongoose.Schema({
  Name: String,
  Email: {
    type: String,
    validate: [isEmail, "invalid email"],
  },
  Role: String,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
