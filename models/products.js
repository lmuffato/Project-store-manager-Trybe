const connection = require('./connection');

const create = async (name, quantity) => {
  const newProduct = await connection()
    .then((db) => db.collection('products').insertOne({ name, quantity }));
  return {
    id: newProduct.insertedId,
    name,
    quantity,
  };
};

const findByName = async (name) => connection()
  .then((db) => db.collection('products').findOne({ name }));

module.exports = {
  create,
  findByName,
};