const documentModel = require("../models/Document");

const async = require("async");
const docToday = async (req, res) => {
  try {
    const date = new Date();
    console.log(date);

    const cal = await documentModel.find({
      DateOfDelivery: {
        $eq: date,
      },
    });

    res.json(cal);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const docTomorrow = async (req, res) => {
  try {
    const date = new Date();
    console.log(date);

    const compare = date + 2;
    const cal = await documentModel.find({
      DateOfDelivery: {
        $gt: date,
        $lt: compare,
      },
    });

    res.json(cal);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const docTwodays = async (req, res) => {
  try {
    const date = new Date();
    console.log(date);

    const compare = date + 3;
    const cal = await documentModel.find({
      DateOfDelivery: {
        $gte: date,
        $lt: compare,
      },
    });

    res.json(cal);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const docInProgress = async (req, res) => {
  try {
    const date = new Date();
    console.log(date);

    const cal = await documentModel.find({
      DateOfDelivery: {
        $gte: date,
      },
    });

    res.json(cal);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const docCompleted = async (req, res) => {
  try {
    const date = new Date();
    console.log(date);

    const cal = await documentModel.find({
      DateOfDelivery: {
        $lt: date,
      },
    });

    res.json(cal);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const docBLHBL = async (req, res) => {
  const result = await documentModel.find({}, { MBL_No: 1, HBL_No: 1 });
  res.json(result);
};
const docLic = async (req, res) => {
  const result = await documentModel.find({}, { License_No: 1 });
  res.json(result);
};
const docOnHold = async (req, res) => {
  const result = await documentModel.find({ isOnHold: true });
  res.json(result);
};
const docBillingDone = async (req, res) => {
  const result = await documentModel.find({ BillingDone: true });
  res.json(result);
};
module.exports = {
  docToday,
  docTomorrow,
  docInProgress,
  docTwodays,
  docBLHBL,
  docLic,
  docOnHold,
  docBillingDone,
  docCompleted,
};
