const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const sendEmail = async (email) => {
  const otp = Math.floor(Math.random() * 1000000 + 1);

  const msg = {
    to: `${email}`, // Change to your recipient
    from: "kishanlal@siti-solutions.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",

    html: `<strong>and easy to do anywhere, even with Node.js ${otp}</strong>`,
  };
  await sgMail
    .send(msg)
    .then((send) => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
  return otp;
};

module.exports = sendEmail;
