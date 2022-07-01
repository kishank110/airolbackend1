const mongoose = require("mongoose");
const userModel = require("../models/User");
const sendEmail = require("../controllers/sendEmail");

const otpModel = require("../models/Otp");
const login = async (req, res) => {
  try {
    const { name, email, role } = req.body;
    const user = await userModel.create({
      name,
      email,
      role,
    });
    const otp1 = await sendEmail(email);
    const otpgen = new otpModel({ email: email, otp: otp1 });
    otpgen.save();
    res.json({ otpgen });
  } catch (error) {
    res.json(error.message);
  }
};
const otpverification = async (req, res) => {
  const { email, otp } = req.body;
  const token = await otpModel.findOne({ email: email });
  console.log(token);
  if (token.otp == otp) {
    res.json({ msg: "SUCCESS" });
  } else {
    res.json({ msg: "INVALID OTP" });
  }
};

module.exports = { login, otpverification };
