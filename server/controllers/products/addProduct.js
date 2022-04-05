const { addProductQuery } = require('../../database/queries');
const { productsSchema, CustomErr } = require('../../utils');

const addProduct = (req, res, next) => {
  productsSchema
    .validateAsync(req.body)
    .then(() => addProductQuery(req.body))
    .then(({ rows }) => res.json({ message: 'Success', status: 201, product: rows[0] }))
    .catch((err) => {
      if (err.details) {
        next(CustomErr(err.details[0].message, 400));
      } else {
        next(err);
      }
    });
};
module.exports = addProduct;
