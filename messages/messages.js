const codes = {
  invalidData: 'invalid_data',
};

const messages = {
  productAlreadyExists: 'Product already exists',
  productNameLength: '"name" length must be at least 5 characters long',
  quantityLarger: '"quantity" must be larger than or equal to 1',
  beANumber: '"quantity" must be a number',
  noData: 'There are no data',
  wrongId: 'Wrong id format',
  invalidQuantity: 'Wrong product ID or invalid quantity',
};

module.exports = {
  codes,
  messages,
};
