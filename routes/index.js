var express = require('express');
var router = express.Router();

var portfolio = require('../data/portfolio.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'Front-end Web Developer / Digital Marketing Specialist',
  	portfolio: portfolio 
  });
});

module.exports = router;
