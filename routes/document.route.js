const {
  createDocument,
  getDocument,
  getDocumentById,
  deleteDocumentById,
  updateDocumentById,
} = require("../controllers/document");

const {
  sortByHBL_No,
  sortByCustomerName,
  sortByDOA,
  sortByDateAndHBL_No,
  sortByDateAndBE_no,
  sortByDateAndMBL_No,
  sortByDateAndLicense_No,
  sortByDateAndIGM_No,
  sortByMBL_No,
} = require("../controllers/reports");
const {
  docToday,
  docTomorrow,
  docTwodays,
  docOnHold,
  docBillingDone,
  docInProgress,
  docCompleted,
} = require("../controllers/dashboard");
const router = require("express").Router();

router.get("/", async (req, res, next) => {
  res.send({ message: "Ok api is working 🚀" });
});
router.route("/createDocument").post(createDocument);
router.route("/getDocument").get(getDocument);
router.route("/getDocumentById/:id").get(getDocumentById);
router.route("/deleteDocumentById/:id").delete(deleteDocumentById);
router.route("/updateDocumentById/:id").put(updateDocumentById);
router.route("/reports/sortByDOA").get(sortByDOA);
router.route("/reports/sortByCustomerName").get(sortByCustomerName);
router.route("/reports/sortByHBL_No").get(sortByHBL_No);
router.route("/reports/sortByMBL_No").get(sortByMBL_No);
router.route("/reports/sortByDateAndHBL_No").get(sortByDateAndHBL_No);
router.route("/reports/sortByDateAndBE_no").get(sortByDateAndBE_no);
router.route("/reports/sortByDateAndMBL_No").get(sortByDateAndMBL_No);
router.route("/reports/sortByDateAndLicense_No").get(sortByDateAndLicense_No);
router.route("/reports/sortByDateAndIGM_No").get(sortByDateAndIGM_No);
router.route("/dashboard/docToday").get(docToday);
router.route("/dashboard/docOnHold").get(docOnHold);
router.route("/dashboard/docCompleted").get(docCompleted);
router.route("/dashboard/docInprogress").get(docInProgress);
router.route("/dashboard/docTomorrow").get(docTomorrow);
router.route("/dashboard/docTwoDays").get(docTwodays);
router.route("/dashboard/docBillingDone").get(docBillingDone);
module.exports = router;
