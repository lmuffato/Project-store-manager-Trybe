const service = require('../service/servProducts');

const createProduct = async (req, res, _next) => {
    const { name, quantity } = req.body;
    const createdProduct = await service.validaCreateProducts(name, quantity);
    if (createdProduct.err) return res.status(422).json(createdProduct);
    return res.status(201).json(createdProduct);
};

const getAll = async (_req, res) => {
  try {
    const allProducts = await service.getAllProducts();
    return res.status(200).json(allProducts);
  } catch (err) {
     console.log(err);
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const productId = await service.getProductId(id);
  if (productId.err) return res.status(422).json(productId);
  return res.status(200).json(productId);
};

const setUpdate = async (req, res, _next) => {
  const { name, quantity } = req.body;
  const { id } = req.params;
  const createdProduct = await service.setUpdateNeWProduct(id, name, quantity);
  if (createdProduct.err) return res.status(422).json(createdProduct);
  return res.status(200).json(createdProduct);
};

const deleteProductId = async (req, res) => {
  const { id } = req.params;
  const deleteProduct = await service.deleteProduct(id);
  if (deleteProduct.err) return res.status(422).json(deleteProduct);
  return res.status(200).json(deleteProduct);
};

module.exports = {
  getAll,
  createProduct,
  getProductById,
  setUpdate,
  deleteProductId,
};