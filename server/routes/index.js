const router = require('express').Router();
const {
  clientError,
  serverError,
  addProduct,
  deleteProduct,
} = require('../controllers');

router.delete('/product/:id', deleteProduct);
router.post('/product', addProduct);
router.use(clientError);
router.use(serverError);

module.exports = router;
