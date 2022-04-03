const { getProductsQuery } = require('../../database/queries');

const getProducts = async (req, res, next) => {
  try {
    const { rows: products } = await getProductsQuery();
    res.json({ message: 'Success', products });
  } catch (err) {
    next(err);
  }
};

module.exports = getProducts;
