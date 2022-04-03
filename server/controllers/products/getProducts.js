const { getProductsQuery } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const { rows: products } = await getProductsQuery();
    res.json({ message: 'Success', products });
  } catch (err) {
    next(err);
  }
};
