const { MongoClient } = require('mongodb');

require('dotenv').config();

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGO_DB_URL = 'mongodb://mongodb:27017/StoreManager';
// const MONGO_DB_URL = 'mongodb://localhost:27017/StoreManager';

// const MONGO_DB_URL = process.env.DB_URL || 'mongodb://mongodb:27017/StoreManager';
const { DB_NAME } = process.env;

let db = null;

const connection = () => (db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS).then((conn) => {
        db = conn.db(DB_NAME);
        return db;
      }));

module.exports = connection;