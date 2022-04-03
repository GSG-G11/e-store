const router = require('express').Router();

const {
  clientError,
  serverError,
  addProduct,
  editProduct,
  getProducts,
  getProduct,
} = require('../controllers');

router.get('/products', getProducts);
router.post('/product', addProduct);
router.route('/product/:id').get(getProduct).put(editProduct);
router.use(clientError);
router.use(serverError);

module.exports = router;
