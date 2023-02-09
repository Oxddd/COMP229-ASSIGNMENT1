var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

/* GET Business page. */
router.get('/business', function(req, res, next) {
  res.render('business', { title: 'Business' });
});

/* GET Add_user page. */
router.get('/add_user', function(req, res, next) {
  res.render('add_user', { title: 'Add_user' });
});

/* GET Updateuser page. */
router.get('/updateuser', function(req, res, next) {
  res.render('updateuser', { title: 'Updateuser' });
});

module.exports = router;
