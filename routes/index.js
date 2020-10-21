var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    message: 'Hello'
  });
});

router.get('/product', function (req, res, next) {
  res.render('products/index_product', {
    title: 'Create New Product',
    message: 'you can create new product'
  })
});

module.exports = router;