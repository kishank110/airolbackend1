const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      required: true,
    },
    createdAt: { type: Date, default: Date.now, index: { expires: 3000000 } },

    // After 5 minutes it deleted automatically from the database
  },
  { timestamps: true }
);
const token = mongoose.model("Otp", otpSchema);
module.exports = token;
