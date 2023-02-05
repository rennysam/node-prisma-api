const {
  getAllProductsService,
  createProductService,
} = require("../services/product");

exports.getAllProductsController = async (req, res, next) => {
  const product = await getAllProductsService();

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Failed to get student information.",
    });
  }
  res.status(200).json({
    success: true,
    message: "Student information were found successfully.",
    data: product,
  });
};

exports.createProductController = async (req, res, next) => {
  const productData = req.body;

  if (!productData) {
    return res.status(400).json({
      success: false,
      message: "Please check the form again.",
    });
  }

  const product = await createProductService(req.body);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Failed to submit application.",
    });
  }

  res.status(201).json({
    success: true,
    message: "Application submitted successfully.",
    data: product,
  });
};
