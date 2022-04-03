const connections = require('../../config/connections');

const addProductQuery = ({
  name, price, category, img, description,
}) => connections.query({
  text: 'INSERT INTO products (name, price ,category ,img,description) VALUES ($1,$2,$3,$4,$5) RETURNING *',
  values: [name, price, category, img, description],
});
module.exports = addProductQuery;
