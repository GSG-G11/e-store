const { clientError, serverError } = require('./error');
const addProduct = require('./products/addProduct');
const deleteProduct = require('./products/deleteProduct');

module.exports = {
  clientError,
  serverError,
  addProduct,
  deleteProduct
};
