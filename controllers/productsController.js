const productsService = require('../services/productsService');

async function getAll(_req, res) {
  const products = await productsService.getAll();
  res.status(200).json(products);
}

async function getById(req, res) {
  const { id } = req.params;

  const productsById = await productsService.getById(id);

  if (productsById.message) return res.status(422).json({ err: productsById });
  res.status(200).json(productsById);
}

async function addProduct(req, res) {
  const { name, quantity } = req.body;
  const addedProduct = await productsService.addProduct({
    name,
    quantity,
  });

  if (addedProduct.message) {
    return res.status(422).json({ err: addedProduct });
  }
  res.status(201).json(addedProduct);
}

module.exports = {
  getAll,
  getById,
  addProduct,
};
