const salesService = require('../services/Sales');

const insert = async (req, res) => {
  const itensSold = req.body;

  const sale = await salesService.insert(itensSold);

  res.status(200).json(sale);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const sale = await salesService.getById(id);

  if (!sale) {
    return res.status(404).json({
      err: {
        code: 'not_found',
        message: 'Sale not found',
      },
    });
  }

  res.status(200).json({ sale });
};

const getAll = async (_req, res) => {
  const sales = await salesService.getAll();

  return res.status(200).json({ sales });
};

module.exports = {
  insert,
  getById,
  getAll,
};