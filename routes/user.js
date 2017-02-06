var express = require('express');
var router = express.Router();
var authHelpers = require('../auth/auth-helpers');
const bcrypt = require('bcryptjs');


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

  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
   models.Users.update({
     password: hash,
     email: req.body.email,
     firstName: req.body.firstName,
     lastName: req.body.lastName
   }, { where: { id: req.params.id } }).then(function() {
     res.redirect('/');
   });
 });

 //posts to database?
  //  router.post('/', function(req, res, next) {
  //   models.Users.create({
  //     password: req.body.password,
  //     email: req.body.email,
  //     firstName: req.body.firstName,
  //     lastName: req.body.lastName
  //   }).then(function(){
  //     res.redirect('/user/')
  //   })
  // });

///////////////////////////////////////////////////////////////////////////////
//                            TESTING                                       //
///////////////////////////////////////////////////////////////////////////////


module.exports = router;
