const router = require('express').Router();
const {notFoundPage, serverError} = require('../controllers');

router.use(notFoundPage);
router.use(serverError);
module.exports = router;
