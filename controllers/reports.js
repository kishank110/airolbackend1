const documentModel = require("../models/Document");

const ApiFeatures = require("../utils/ApiFeatures");
const sortByHBL_No = async (req, res) => {
  const result = await documentModel.find({}).sort({ HBL_No: 1 });
  res.json(result);
};
const sortByMBL_No = async (req, res) => {
  const result = await documentModel.find({}).sort({ MBL_No: 1 });
  res.json(result);
};
const sortByIGM_No = async (req, res) => {
  const result = await documentModel.find({}).sort({ IGM_No: 1 });
  res.json(result);
};
const sortByLicense_No = async (req, res) => {
  const result = await documentModel.find({}).sort({ License_No: 1 });
  res.json(result);
};
const sortByQty = async (req, res) => {
  const result = await documentModel.find({}).sort({ Qty: 1 });
  res.json(result);
};
const sortByDate = async (req, res) => {
  const result = await documentModel.find({}).sort({ Date: 1 });
  res.json(result);
};

const sortByDOA = async (req, res) => {
  const result = await documentModel.find({}).sort({ DateOfDelivery: 1 });
  res.json(result);
};

const sortByCustomerName = async (req, res) => {
  const result = await documentModel.find({}).sort({ Importer: 1 });
  res.json(result);
};
const sortByDateAndHBL_No = async (req, res) => {
  const result = await documentModel.find({}).sort({ HBL_No: 1, Date: 1 });
  console.log(result);
  res.json(result);
};
const sortByDateAndMBL_No = async (req, res) => {
  const result = await documentModel.find({}).sort({ MBL_No: 1, Date: 1 });
  res.json(result);
};
const sortByDateAndIGM_No = async (req, res) => {
  const result = await documentModel.find({}).sort({ IGM_No: 1, Date: 1 });
  res.json(result);
};
const sortByDateAndLicense_No = async (req, res) => {
  const result = await documentModel.find({}).sort({ License_No: 1, Date: 1 });
  res.json(result);
};
const sortByDateAndBE_no = async (req, res) => {
  const result = await documentModel.find({}).sort({ BE_no: 1, Date: 1 });
  res.json(result);
};
module.exports = {
  sortByDate,
  sortByHBL_No,
  sortByIGM_No,
  sortByLicense_No,
  sortByQty,
  sortByMBL_No,
  sortByDOA,
  sortByCustomerName,
  sortByDateAndHBL_No,
  sortByDateAndMBL_No,
  sortByDateAndIGM_No,
  sortByDateAndLicense_No,
  sortByDateAndBE_no,
};
