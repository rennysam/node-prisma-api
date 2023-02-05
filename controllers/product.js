const {
  getAllProductsService,
  createProductService,
} = require("../services/product");

exports.getAllProductsController = async (req, res, next) => {
  const product = await getAllProductsService();

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Failed to get books.",
    });
  }
  res.status(200).json({
    success: true,
    message: "The books were found successfully.",
    data: product,
  });
};

exports.createProductController = async (req, res, next) => {
  const productData = req.body;

  if (!productData) {
    return res.status(400).json({
      success: false,
      message: "Please add a book title.",
    });
  }

  const product = await createProductService(req.body);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Failed to create book.",
    });
  }

  res.status(201).json({
    success: true,
    message: "The book was created successfully.",
    data: product,
  });
};
