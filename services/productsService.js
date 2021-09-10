const productsModel = require('../models/productsModel');

const getAll = async () => {
  const products = await productsModel.getAll();
  return {
    response: products,
    status: 200,
  };
};

const findById = async (id) => {
  const product = await productsModel.findById(id);
  return {
    response: product,
    status: 200,
  };
};

const deleteById = async (id) => {
  const productDeleted = await productsModel.deleteById(id);
  return {
    response: productDeleted,
    status: 200,
  };
};

const create = async (name, quantity) => {
  const productCreated = await productsModel.create(name, quantity);
  return {
    response: productCreated,
    status: 201,
  };
};

const update = async (id, name, quantity) => {
  const productUpdated = await productsModel.update(id, name, quantity);
  return {
    response: productUpdated,
    status: 201,
  };
};

module.exports = { getAll, findById, deleteById, create, update }; 