const { clientError, serverError } = require('./error');
const { getProducts, addProduct, editProduct } = require('./products');

module.exports = {
  clientError,
  serverError,
  getProducts,
  addProduct,
  editProduct,
};
