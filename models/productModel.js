const { ObjectId } = require('mongodb');
const connect = require('./connection');

const getName = async (name) => {
  const db = await connect();
  const result = await db.collection('products').findOne({ name });
  return result;
};

const create = async (name, quantity) => {
  const db = await connect();
  const product = await db.collection('products').insertOne({ name, quantity });
  return product.ops[0];
};

const getAll = async () => {
  const db = await connect();
  const products = await db.collection('products').find().toArray();
  return products;
};

const getById = async (_id) => {
  const db = await connect();
  const product = await db.collection('products').findOne({ _id: ObjectId(_id) });
  console.log(product);
  return product;
};

module.exports = {
  getName,
  create,
  getAll,
  getById,
};