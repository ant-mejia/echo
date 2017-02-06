var express = require('express');
var router = express.Router();
var authHelpers = require('../auth/auth-helpers');
const bcrypt = require('bcryptjs');


//added to for user
var models = require('../db/models/index');

/* GET users listing. */


//get user route
router.get('/', authHelpers.loginRequired, (req, res, next) => {
  res.render('user/index', {
    user: req.user.dataValues,
    title: 'user',
    currentRoute: 'user'
  });
});

//Route to edit page
router.get('/:id/edit', function(req, res, next) {
  models.Users.findById(req.params.id).then(function(user) {
    res.render('user/edit', { user: user });
  });
});

//DELETE ROUTER to DELETE USER
router.get('/:id/delete', function(req, res, next) {
  models.Users.findById(req.params.id).then(function(user) {
    res.render('user/delete', { user: user, title:'title' });
  });
});

//edit allow the edit to work and redirects user to info page
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

// deletes ACTUAL USER!
router.delete('/:id', function(req, res, next) {
 models.Users.destroy({
   where:{ id: req.params.id }
 }).then(function(user){
   res.redirect('/');
 });
});

module.exports = router;
