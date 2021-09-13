const { getProductById } = require('../services/Products');
const { getSaleById } = require('../services/Sales');

const err = {
  // status: 422,
  code: 'invalid_data',
  message: 'Wrong product ID or invalid quantity',
};

const validateSale = async (req, res, next) => {
  const itensSale = req.body;

  itensSale.forEach(async ({ productId, quantity }) => {
    const product = await getProductById(productId);
    const validations = [quantity < 1, typeof quantity === 'string', !product];
    if (validations.includes(true)) {
      return res.status(422).json({ err });
    }
    return next();
  });
};

const validateInventory = (req, res, next) => {
  const itensSale = req.body;

  itensSale.forEach(async ({ productId, quantity: quantToSale }) => {
    const { quantity } = await getProductById(productId);
    const lastQuantity = quantity - quantToSale;

    if (lastQuantity < 0) {
      return res.status(404).json({ err: {
        code: 'stock_problem',
        message: 'Such amount is not permitted to sell',
      } });
    }
    return next();
  });
};

const checkSaleExists = async (req, res, next) => {
  const { id } = req.params;

  const sale = await getSaleById(id);

  if (!sale) {
    return res.status(404).json({
      err: {
        code: 'not_found',
        message: 'Sale not found',
      },
    });
  }
  next();
};

module.exports = { validateSale, checkSaleExists, validateInventory };
