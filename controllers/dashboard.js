const documentModel = require("../models/Document");

const async = require("async");
const docToday = async (req, res) => {
  try {
    const compare = new Date(Date.now());
    console.log(compare);
    console.log(compare.getDay());
    console.log(compare.getMonth());
    console.log(compare.getFullYear());
    const cal = await documentModel.find({
      $and: [
        { x: { $ne: 0 } },
        {
          $expr: {
            $eq: [{ $dayOfMonth: "$DateOfDelivery" }, compare.getDay() + 3],
          },
        },
        {
          $expr: {
            $eq: [{ $year: "$DateOfDelivery" }, compare.getFullYear()],
          },
        },
        {
          $expr: {
            $eq: [{ $month: "$DateOfDelivery" }, compare.getMonth() + 1],
          },
        },
      ],
    });

    res.json(cal);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const docTomorrow = async (req, res) => {
  try {
    const compare = new Date(Date.now());

    const cal = await documentModel.find({
      $and: [
        { x: { $ne: 0 } },
        {
          $expr: {
            $eq: [{ $dayOfMonth: "$DateOfDelivery" }, compare.getDay() + 4],
          },
        },
        {
          $expr: {
            $eq: [{ $year: "$DateOfDelivery" }, compare.getFullYear()],
          },
        },
        {
          $expr: {
            $eq: [{ $month: "$DateOfDelivery" }, compare.getMonth() + 1],
          },
        },
      ],
    });

    res.json(cal);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const docTwodays = async (req, res) => {
  try {
    const compare = new Date(Date.now());

    const cal = await documentModel.find({
      $and: [
        { x: { $ne: 0 } },
        {
          $expr: {
            $eq: [{ $dayOfMonth: "$DateOfDelivery" }, compare.getDay() + 5],
          },
        },
        {
          $expr: {
            $eq: [{ $year: "$DateOfDelivery" }, compare.getFullYear()],
          },
        },
        {
          $expr: {
            $eq: [{ $month: "$DateOfDelivery" }, compare.getMonth() + 1],
          },
        },
      ],
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
