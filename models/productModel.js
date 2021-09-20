const { ObjectId } = require('mongodb');
const connection = require('./connection');

const addProduct = async (name, quantity) => {
  const db = await connection();
  const result = await db.collection('products').insertOne({ name, quantity });
  return result.ops[0];
  // retirado a informação do link: https://www.w3schools.com/nodejs/nodejs_mongodb_insert.asp
};

const getProductByName = async (name) => {
  const db = await connection();
  const result = await db.collection('products').findOne({ name });
  return result;
};

const getProducts = async () => {
  const db = await connection();
  const result = await db.collection('products').find().toArray();
  return { products: result };
};

const getProductId = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await connection();
  const result = await db.collection('products').findOne({ _id: ObjectId(id) });
  return result;
};

const updateProductId = async (id, name, quantity) => {
  const db = await connection();
  const result = await db.collection('products').updateOne({ _id: ObjectId(id) }, 
  { $set: { name, quantity } });
  return result;
};

const deleteProductId = async (id, name, quantity) => {
  const db = await connection();
  const result = await db.collection('products').deleteOne({ _id: ObjectId(id) }, 
  { $set: { name, quantity } });
  return result;
};

module.exports = {
  addProduct,
  getProductByName,
  getProducts,
  getProductId,
  updateProductId,
  deleteProductId,
};
