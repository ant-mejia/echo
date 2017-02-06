var express = require('express');
var router = express.Router();
var authHelpers = require('../auth/auth-helpers');

//added to for user
var models = require('../db/models/index');

/* GET users listing. */


//get user route
router.get('/', function(req, res, next) {
  models.Users.findAll({}).then(function(user) {
  res.render('user/index', {
    user: req.user.dataValues,
    title: 'user',
    currentRoute: 'user'
  });
  });
});
////////////////////////////////////
router.get('/new', function(req, res, next) {
  res.render('user/new');
});

router.post('/', function(req, res, next) {
  models.Users.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
      firstName: req.body.firstname,
      lastName: req.body.lastname
  }).then(function() {
    res.redirect('/user')
  });
});

router.get('/:id', function(req, res, next) {
  models.Users.findById(req.params.id).then(function(user) {
    res.render('user/show', { user: user });
  });
});

router.get('/:id/edit', function(req, res, next) {
  models.Users.findById(req.params.id).then(function(user) {
    res.render('user/edit', { user: user });
  });
});

router.put('/:id', function(req, res, next) {
  models.Users.update({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
    firstName: req.body.firstname,
    lastName: req.body.lastname
  }, { where: { id: req.params.id } }).then(function() {
    res.redirect('/user/' + req.params.id);
  });
});

router.delete('/:id', function(req, res, next) {
  models.Users.destroy({
    where: { id: req.params.id }
  }).then(function(user) {
    res.redirect('/user');
  });
});

module.exports = router;
