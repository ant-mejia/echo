var express = require('express');
var router = express.Router();
var authHelpers = require('../auth/auth-helpers');

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


///////////////////////////////////////////////////////////////////////////////
//                            TESTING                                       //
///////////////////////////////////////////////////////////////////////////////

//editing pages
//edit the show page (router for edit page)

// router.get('/user/:id', function(req, res, next) {
//   models.user.findById(req.params.id).then(function(data) {
//     res.render('user/edit', {
//       user: req.user.dataValues,
//       title: 'user',
//       currentRoute: 'user'
//      });
//   });
// });
//
// router.get('/user/:id', authHelpers.loginRequired, (req, res, next) => {
//   res.render('user/edit', {
//     user: req.user.dataValues,
//     title: 'user',
//     currentRoute: 'user'
//   });
// });




// router.get('user/:id/edit', function(req, res, next) {
//   res.render('/edit', {
//     user: req.user.dataValues.id,
//     title: 'user',
//     currentRoute: 'user'
//   });
// });

//IT WORKS!!!!!!!! Route to edit page
router.get('/:id/edit', function(req, res, next) {
  models.Users.findById(req.params.id).then(function(user) {
    res.render('user/edit', { user: user });
  });
});

//edit allow the edit to work and redirects user to info page
//NOT WORKING
router.put('/:id', function(req, res, next) {
   models.Users.update({
     password: req.body.password,
     email: req.body.email,
     firstName: req.body.firstName,
     lastName: req.body.lastName
   }, { where: { id: req.params.id } }).then(function() {
     res.redirect('/user/' + req.params.id);
   });
 });

///////////////////////////////////////////////////////////////////////////////
//                            TESTING                                       //
///////////////////////////////////////////////////////////////////////////////

module.exports = router;
