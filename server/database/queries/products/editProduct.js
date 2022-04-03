const connections = require('../../config/connections');

const editProductQuery = ({
  name, price, category, img, description,
}, id) => connections.query({
  text: 'UPDATE products SET name=$2, price=$3 ,category=$4 ,img=$5, description=$6 WHERE id=$1',
  values: [id, name, price, category, img, description],
});
module.exports = editProductQuery;
