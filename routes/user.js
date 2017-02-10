var express = require('express');
var router = express.Router();
var authHelpers = require('../auth/auth-helpers');
const bcrypt = require('bcryptjs');
const moment = require('moment');


//added to for user
var models = require('../db/models/index');

/* GET users listing. */


//get user route
router.get('/:username', authHelpers.loginRequired, (req, res, next) => {
  models.Users.findAll({ where: { username: req.params.username }, order: [['id', 'DESC']] }).then(function(data) {
    if (data.length) {
      //Route to edit page
      if (req.user.username === req.params.username) {
        models.Messages.findAll({ where: { originId: req.params.username}}).then(function (data) {
          res.render('user/profile', {
            title: 'user',
            user: req.user,
            messages: data,
            moment: moment
          });
        });
      } else {
        res.render('user/index', {
          title: 'user',
          user: req.user,
          profile: data[0].dataValues,
          moment: moment
        });
      }

    } else {
      res.redirect('/');
    }
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
   models.Users.update({
     email: req.body.email,
     firstName: req.body.firstName,
     lastName: req.body.lastName
   }, { where: { id: req.params.id } }).then(function() {
     res.redirect('/');
   });
 });


// deletes ACTUAL USER!
router.delete('/:username', function(req, res, next) {
 models.Users.destroy({
   where:{ username: req.params.username }
 }).then(function(user){
   res.redirect('/');
 });
});

module.exports = router;
