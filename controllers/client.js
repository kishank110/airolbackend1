const clientModel = require("../models/Client");
const createClient = async (req, res) => {
  try {
    const {
      ImporterName,
      IEC_NO,
      Address,
      GST_No,
      PAN_No,
      Contact_Person,
      Licence_No,
      Qty,
      Description_Details,
      Remark,
    } = req.body;

    const client = await clientModel.create({
      ImporterName,
      IEC_NO,
      Address,
      GST_No,
      PAN_No,
      Contact_Person,
      Licence_No,
      Qty,
      Description_Details,
      Remark,
    });
    if (client) {
      res.status(200).json(client);
      const result = client.toJSON();
      console.log(result);
    }
  } catch (error) {
    res.json(error.message);
  }
};

const updateClientById = async (req, res) => {
  await clientModel
    .updateOne({
      ImporterName: req.body.ImporterName,
      IEC_NO: req.body.IEC_NO,
      Address: {
        LINE1: req.body.LINE1,
        LINE2: req.body.LINE2,
        Branch_Code: req.body.Branch_Code,
      },
      GST_No: req.body.GST_No,
      PAN_No: req.body.PAN_No,
      Contact_Person: [
        {
          Name: req.body.Name,
          Email: req.body.Email,
          Phone_Number: req.body.Phone_Number,
        },
      ],
      Licence_No: req.body.Licence_No,
      Qty: req.body.Qty,
      Description_Details: req.body.Description_Details,
      Remark: req.body.Remark,
    })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json({ msg: err.message });
    });
};

const deleteClientById = async (req, res) => {
  await clientModel
    .deleteOne({ _id: req.params.id })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json({ msg: err.message });
    });
};
const getClient = async (req, res) => {
  await clientModel
    .find({})
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      console.log(err);
      res.json({ msg: err.message });
    });
};
const getClientById = async (req, res) => {
  await clientModel
    .find({ _id: req.params.id })
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      console.log(err);
      res.json({ msg: err.message });
    });
};
const sortByClientName = async (req, res) => {
  const result = await clientModel.find({}).sort({ Importer: 1 });
  res.json(result);
};

module.exports = {
  createClient,
  updateClientById,
  deleteClientById,
  getClientById,
  getClient,
  sortByClientName,
  
};
