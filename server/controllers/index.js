const { clientError, serverError } = require('./error');
const { getProducts, addProduct } = require('./products');

module.exports = {
  clientError,
  serverError,
  getProducts,
  addProduct,
};
