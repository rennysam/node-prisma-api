const {
  getAllStudentApplController,
  createStudentApplController,
} = require("../controllers/form");
const router = require("express").Router({ mergeParams: true });

router
  .route("/")
  .get(getAllStudentApplController)
  .post(createStudentApplController);

module.exports = router;
