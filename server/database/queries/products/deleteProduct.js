const connections = require('../../config/connections');

const deleteProductQuery = (id) =>  connections.query('DELETE From products WHERE id=$1', [id]);

module.exports = deleteProductQuery;