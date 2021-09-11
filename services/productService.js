const productModel = require('../models/productModel');

const createNewProduct = async ({ name, quantity }) => {
  const newProduct = await productModel.create({ name, quantity });

  return newProduct;
};

const getAllProducts = async () => {
  const result = await productModel.getAll();
  return result;
};

const getProductById = async (id) => {
  const result = await productModel.findById(id);
  return result;
};

const updateProduct = async ({ id, name, quantity }) => {
  const result = await productModel.update({ id, name, quantity });
  return result;
};

const deleteProduct = async (id) => {
  const result = await productModel.remove(id);
  return result;
};

module.exports = {
  createNewProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
