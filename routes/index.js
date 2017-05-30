var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Front-end Web Developer / Digital Marketing Specialist' });
});

module.exports = router;
