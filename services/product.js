const { getPrismaClient } = require("../loaders/prisma");

exports.getAllProductsService = async () => {
  const prismaClient = getPrismaClient();

  try {
    return await prismaClient.product.findMany();
  } catch (error) {
    console.log(error);
    return null;
  }
};

exports.createProductService = async (values) => {
  if (!values) return null;
  const prismaClient = getPrismaClient();

  try {
    return await prismaClient.product.create({ data: values });
  } catch (error) {
    console.log(error);
    return null;
  }
};
