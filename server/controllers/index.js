const { clientError, serverError } = require('./error');
const {
  getProducts,
  addProduct,
  editProduct,
  getProduct,
} = require('./products');

module.exports = {
  clientError,
  serverError,
  getProducts,
  addProduct,
  editProduct,
  getProduct,
};
