const router = require("express").Router();
const {
  createClient,
  updateClientById,
  getClientById,
  getClient,
  deleteClientById,
  sortByClientName,
} = require("../controllers/client");

router.route("/createClient").post(createClient);
router.route("/getClientById/:id").get(getClientById);
router.route("/getClient").get(getClient);
router.route("/reports/sortByClientName").get(sortByClientName);
router.route("/updateClientById/:id").put(updateClientById);
router.route("/deleteClientById/:id").delete(deleteClientById);
module.exports = router;
