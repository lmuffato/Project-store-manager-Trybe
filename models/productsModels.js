const { getConnection } = require('./connection');

const createProduct = async ({ name, quantity }) => {
  const db = await getConnection();
  const { insertedId: _id } = await db.collection('products').insertOne({ name, quantity });
  return {
    _id,
    name,
    quantity,
  };
};

const getProductByName = async (productName) => {
  const db = await getConnection();
  const data = await db.collection('products').findOne({ name: productName });
  return data;
};

module.exports = {
  createProduct,
  getProductByName,
};
