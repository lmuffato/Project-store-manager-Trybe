const productsModels = require('../models/productsModels');

const createProduct = async ({ name, quantity }) => {
  const alreadyExists = await productsModels.getProductByName(name);

  if (alreadyExists) {
    return { code: 'invalid_data', type: 422, message: 'Product already exists' };
  }

  const response = await productsModels.createProduct({ name, quantity });
  return response;
};

const getAllProducts = async () => {
  const products = await productsModels.getAllProducts();

  if (!products) return { code: 'invalid_data', type: 422, message: 'Wrong id format' };

  return products;
};

module.exports = {
  createProduct,
  getAllProducts,
};
