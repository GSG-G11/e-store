const dbConnection = require('../../config/connections');

module.exports = (productId) => dbConnection.query('SELECT * FROM products WHERE id = $1', [productId]);
