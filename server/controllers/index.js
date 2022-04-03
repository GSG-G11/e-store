const { clientError, serverError } = require('./error');
const {
  getProducts,
  addProduct,
  editProduct,
  getProduct,
  deleteProduct,
} = require('./products');

module.exports = {
  clientError,
  serverError,
  getProducts,
  addProduct,
  deleteProduct,
  editProduct,
  getProduct,
};
