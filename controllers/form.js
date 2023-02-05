const {
  getAllStudentApplService,
  createStudentApplService,
} = require("../services/form.js");

exports.getAllStudentApplController = async (req, res, next) => {
  const applForms = await getAllStudentApplService();

  if (!applForms) {
    return res.status(500).json({
      success: false,
      message: "Failed to get student information.",
    });
  }
  res.status(200).json({
    success: true,
    message: "Student information were found successfully.",
    data: applForms,
  });
};

exports.createStudentApplController = async (req, res, next) => {
  const formData = req.body;

  if (!formData) {
    return res.status(400).json({
      success: false,
      message: "Please check the form.",
    });
  }

  const applData = await createStudentApplService(req.body);

  if (!applData) {
    return res.status(500).json({
      success: false,
      message: "Failed to submit student information.",
    });
  }

  res.status(201).json({
    success: true,
    message: "Student information was submitted successfully.",
    data: applData,
  });
};
