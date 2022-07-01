const express = require("express");
const createError = require("http-errors");
const morgan = require("morgan");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

mongoose
  .connect("mongodb://127.0.0.1:27017/airol")
  .then(() => {
    console.log("SUCCESS DB");
  })
  .catch((err) => {
    console.log(err);
  });
app.get("/", async (req, res, next) => {
  res.send({ message: "Awesome it works 🐻" });
});

app.use("/api", require("./routes/document.route"));

app.use("/api", require("./routes/client.route"));
app.use("/api", require("./routes/login"));
app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});
app.listen(3000);
