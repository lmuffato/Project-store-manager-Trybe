const ProductsService = require('../services/ProductsService');

const create = async (req, res) => {
  const { name, quantity } = req.body;
  const { code, message, product } = await ProductsService.create(name, quantity);
  if (!product) return res.status(code).json({ message });
  res.status(code).json(product);
};

const getAll = async (_req, res) => {
  const { code, products } = await ProductsService.getAll();
  res.status(code).json(products);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { code, message, product } = await ProductsService.getById(id);
 // VERIFICAR SE O ID JÁ EXISTE
  if (!product) return res.status(code).json({ message });
  res.status(code).json(product);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;
  const { code, message, product } = await ProductsService.update(id, name, quantity);
  if (!product) return res.status(code).json({ message });
  res.status(code).json(product);
};

const exclude = async (req, res) => {
  const { id } = req.params;
  const { code, message, product } = await ProductsService.exclude(id);

  if (!product) return res.status(code).json({ message });
  res.status(code).json(product);
};

module.exports = {
 create,
 getAll,
 getById,
 update,
 exclude,
};