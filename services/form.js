const { getPrismaClient } = require("../loaders/prisma");

exports.getAllStudentApplService = async () => {
  const prismaClient = getPrismaClient();

  try {
    return await prismaClient.form.findMany();
  } catch (error) {
    console.log(error);
    return null;
  }
};

exports.createStudentApplService = async (values) => {
  if (!values) return null;
  const prismaClient = getPrismaClient();

  try {
    return await prismaClient.form.create({ data: values });
  } catch (error) {
    console.log(error);
    return null;
  }
};
