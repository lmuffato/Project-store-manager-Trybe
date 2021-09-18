const serviceSales = require('../services/salesService');

const getSales = async (_req, res) => {
  const products = await serviceSales.getSales();
  res.status(200).json({ products });
};

const error = {
  err: {
    code: 'invalid_data',
    message: 'Wrong product ID or invalid quantity' },
};

const create = async (req, res) => {
  const sales = req.body;

  sales.forEach((sale) => {
    if (typeof sale.quantity !== 'number') {
      return res.status(422).json(error);
    }
    if (sale.quantity <= 0) {
      return res.status(422).json(error);
    }
  });
 
  const createSale = await serviceSales.create(sales);
  if (!createSale) return res.status(422).json(createSale);
};

module.exports = {
  create,
  getSales,
};