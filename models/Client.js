const mongoose = require("mongoose");
const clientSchema = new mongoose.Schema({
  ImporterName: String,
  IEC_NO: Number,
  Address: { LINE1: String, LINE2: String, Branch_Code: String },
  GST_No: String,
  PAN_No: String,
  Contact_Person: [{ Name: String, Email: String, Phone_Number: String }],
  Licence_No: Number,
  Qty: Number,
  Description_Details: String,
  Remark: String,
});

const client = mongoose.model("Client", clientSchema);
module.exports = client;
