const sales = require('../models/sales');
const products = require('../models/products');

const addSales = async (itensSold) => {
    const { productId, quantity } = itensSold[0];
    const findSales = await sales.getBySale(itensSold);
    const message = 'erro';
    const err = 'Such amount is not permitted to sell';
    if (findSales) return { status: 422, message };

    const product = await products.getById(productId);
    const resultQuantity = product.quantity - quantity;

    if (resultQuantity < 0) return { status: 404, err };
    const data = { name: product.name, quantity: resultQuantity };
    await products.update(productId, data);

    const result = await sales.addSales(itensSold);
    return { status: 200, data: result };
};

module.exports = { addSales };
