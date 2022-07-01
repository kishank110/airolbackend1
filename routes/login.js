const { login, otpverification } = require("../controllers/login");

const router = require("express").Router();
router.route("/login").post(login);
router.route("/otp-verify").post(otpverification);
module.exports = router;
