const salesModel = require('../models/Sales');

const insert = async (products) => {
  const { _id, itensSold } = await salesModel.insert(products);

  return {
    _id,
    itensSold,
  };
};

const getById = async (id) => salesModel.getById(id);

const getAll = async () => salesModel.getAll();

const update = async (id, sale) => {
  const updated = await salesModel.update(id, sale);

  return updated;
};

const remove = async (id) => {
  const removedSale = await salesModel.remove(id);

  return removedSale;
};

module.exports = {
  insert,
  getById,
  getAll,
  update,
  remove,
};