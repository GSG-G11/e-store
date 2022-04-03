const router = require('express').Router();
const {
  clientError,
  serverError,
  addProduct,
} = require('../controllers');

router.post('/product', addProduct);
router.use(clientError);
router.use(serverError);

module.exports = router;
