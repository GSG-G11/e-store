const { clientError, serverError } = require('./error');
const { getProducts } = require('./products');

module.exports = {
  clientError,
  serverError,
  getProducts,
};
