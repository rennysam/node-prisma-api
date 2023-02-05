const {
  getAllProductsController,
  createProductController,
} = require("../controllers/product");
const router = require("express").Router({ mergeParams: true });

router.route("/").get(getAllProductsController).post(createProductController);

module.exports = router;
