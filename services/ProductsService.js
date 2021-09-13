const ProductsModel = require('../models/ProductsModel');
const ProductSchema = require('../schemas/ProductSchema');

const create = async (name, quantity) => {
  const validations = ProductSchema.validatePost(name, quantity);
  if (validations.message) return validations;

  const product = await ProductsModel.create(name, quantity);
  return { code: 201, product };
};

const getAll = async () => {
  const products = await ProductsModel.getAll();
  return { code: 200, products };
};

const getById = async (id) => {
  const validations = ProductSchema.validateGet(id);
  if (validations.message) return validations;

  const product = await ProductsModel.getById(id);
  return { code: 200, product };
};

const update = async (id, name, quantity) => {
  const validations = ProductSchema.validatePut(name, quantity);
  if (validations.message) return validations;

  const product = await ProductsModel.update(id, name, quantity);
  return { code: 200, product };
};

const exclude = async (id) => {
  const validations = ProductSchema.validateGet(id);
  if (validations.message) return validations;

  const product = await ProductsModel.getById(id);
  await ProductsModel.exclude(id);

  return { code: 200, product };
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  exclude,
};