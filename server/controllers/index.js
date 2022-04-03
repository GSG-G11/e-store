const { clientError, serverError } = require('./error');
const { addProduct, editProduct } = require('./products');

module.exports = {
  clientError,
  serverError,
  addProduct,
  editProduct,
};
