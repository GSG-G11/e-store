const router = require('express').Router();

const {
  addProduct,
  deleteProduct,
  editProduct,
  getProducts,
  getProduct,
} = require('../controllers');

router.get('/products', getProducts);
router.post('/product', addProduct);
router.route('/product/:id').get(getProduct).put(editProduct).delete(deleteProduct);

module.exports = router;
