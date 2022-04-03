const { getProductQuery } = require('../../database/queries');

module.exports = async (req, res, next) => {
  try {
    const { params: { id: productId } } = req;
    const { rows: product } = await getProductQuery(productId);
    res.json({ message: 'Success', product });
  } catch (err) {
    next(err);
  }
};
