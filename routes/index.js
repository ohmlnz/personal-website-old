var express = require('express');
var router = express.Router();

var portfolio = require('../data/portfolio.json');
var details = require('../data/details.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
  	title: 'Front-end Web Developer - Digital Marketing Specialist',
  	portfolio: portfolio
  });
});

router.get('/details', function(req, res, next) {
  res.render('details', {
    title: 'Details',
  	details: details
  });
});

module.exports = router;
