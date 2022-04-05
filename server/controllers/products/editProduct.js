const { editProductQuery } = require('../../database/queries');
const { productsSchema, CustomErr } = require('../../utils');

const editProduct = (req, res, next) => {
  const { id } = req.params;
  productsSchema
    .validateAsync(req.body)
    .then(() => editProductQuery(req.body, id))
    .then(({ rows }) => res.json({ message: 'Success', status: 200, product: rows[0] }))
    .catch((err) => {
      if (err.details) {
        next(CustomErr(err.details[0].message, 400));
      } else {
        next(err);
      }
    });
};
module.exports = editProduct;
