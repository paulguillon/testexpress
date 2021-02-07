var express = require('express');
var router = express.Router();

/* GET users . */
router.get('/users', function (req, res, next) {
  res.render('users', { title: 'Liste de tous les users' });
});

/* GET one user. */
router.get('/users/:id', function (req, res, next) {
  const id = req.params.id;
  res.render('user', { id });
});

module.exports = router;
