const documentModel = require("../models/Document");

const createDocument = async (req, res) => {
  try {
    const {
      Importer,
      Email,
      Entity,
      Port,
      JobNo,
      MBL_No,
      MBL_date,
      HBL_No,
      HBL_date,
      Shipping_Line,
      ETA_date,
      LCLorFCL,
      Qty,
      Description,
      License_No,
      Invoice_No,
      IGM_No,
      IGM_date,
      Item_No,
      Inward_Date,
      BE_no,
      Date,
      CFS,
      Customs_Duty_Paid,
      Planning_Date,
      DateOfDelivery,
      BillingDone,
      Mode,
      UPI_Number,
      Bill_Amount,
      TDS_details,
      Amount,
      Remarks,
      isOnHold,
    } = req.body;
    const doc = await documentModel.create({
      Importer,
      Email,
      Entity,
      Port,
      JobNo,
      MBL_No,
      MBL_date,
      HBL_No,
      HBL_date,
      Shipping_Line,
      ETA_date,
      LCLorFCL,
      Qty,
      Description,
      License_No,
      Invoice_No,
      IGM_No,
      IGM_date,
      Item_No,
      Inward_Date,
      BE_no,
      Date,
      CFS,
      Customs_Duty_Paid,
      Planning_Date,
      DateOfDelivery,
      BillingDone,
      Mode,
      UPI_Number,
      Bill_Amount,
      TDS_details,
      Amount,
      Remarks,
      isOnHold,
    });
    if (doc) {
      res.status(200).json(doc);
      const result = doc.toJSON();
      console.log(result);
    }
  } catch (error) {
    res.json(error.message);
  }
};
const getDocument = async (req, res) => {
  await documentModel
    .find({})
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
const getDocumentById = async (req, res) => {
  await documentModel
    .find({ _id: req.params.id })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
const deleteDocumentById = async (req, res) => {
  await documentModel
    .deleteOne({ _id: req.params.id })
    .then((data) => {
      console.log("data gone");
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
const updateDocumentById = async (req, res) => {
  await documentModel
    .updateOne(
      { _id: req.params.id },
      {
        Importer: req.body.Importer,
        Email: req.body.Email,
        Entity: req.body.Entity,
        Port: req.body.Port,
        JobNo: req.body.JobNo,
        MBL_No: req.body.MBL_No,
        MBL_date: req.body.MBL_date,
        HBL_No: req.body.HBL_No,
        HBL_date: req.body.HBL_date,
        Shipping_Line: req.body.Shipping_Line,
        ETA_date: req.body.ETA_date,
        LCLorFCL: req.body.LCLorFCL,
        Qty: req.body.Qty,
        Description: req.body.Description,
        License_No: req.body.License_No,
        Invoice_No: req.body.Invoice_No,
        IGM_No: req.body.IGM_No,
        IGM_date: req.body.IGM_date,
        Item_No: req.body.Item_No,
        Inward_Date: req.body.Inward_Date,
        BE_no: req.body.BE_no,
        Date: req.body.Date,
        CFS: req.body.CFS,
        Customs_Duty_Paid: req.body.Customs_Duty_Paid,
        Planning_Date: req.body.Planning_Date,
        DateOfDelivery: req.body.DateOfDelivery,
        BillingDone: req.body.BillingDone,
        Mode: req.body.Mode,
        UPI_Number: req.body.UPI_Number,
        Bill_Amount: req.body.Bill_Amount,
        TDS_details: req.body.TDS_details,
        Amount: req.body.Amount,
        Remarks: req.body.Remarks,
        isOnHold: req.body.isOnHold,
      }
    )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  createDocument,
  getDocument,
  getDocumentById,
  deleteDocumentById,
  updateDocumentById,
};
