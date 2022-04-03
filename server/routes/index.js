const router = require('express').Router();

const {
  addProduct,
  editProduct,
  getProducts,
  getProduct,
} = require('../controllers');

router.get('/products', getProducts);
router.post('/product', addProduct);
router.route('/product/:id').get(getProduct).put(editProduct);

module.exports = router;
