const { clientError, serverError } = require('./error');
const addProduct = require('./products/addProduct');
const editProduct = require('./products/editProduct');

module.exports = {
  clientError,
  serverError,
  addProduct,
  editProduct,
};
