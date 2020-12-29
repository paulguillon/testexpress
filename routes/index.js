var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MVC avec Expess.js' });
});

/* GET users listing. */
router.get('/users/:id', function(req, res, next) {
  const id = req.params.id;
  res.render('users', {id});
});

module.exports = router;
