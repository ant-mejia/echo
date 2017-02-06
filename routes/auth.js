const express = require('express');
const router = express.Router();

const authHelpers = require('../auth/auth-helpers');
const passport = require('../auth/local');

//changed from register to registration
router.get('/register', authHelpers.loginRedirect, (req, res)=> {
  res.render('auth/registration', {title: 'register', currentRoute: 'auth'});
});


//registration, places information in database for user
router.post('/register', (req, res, next)  => {
  authHelpers.createUser(req, res)
  .then((user) => {
    req.login(user, (err) => {
      if (err) return next(err);

      res.redirect('/user');
    });
  })
  .catch((err) => { res.status(500).json({ status: 'error' }); });
});

//auth login
router.get('/login', authHelpers.loginRedirect, (req, res)=> {
  res.render('auth/login', {
    title: 'title'
  });
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/user',
    failureRedirect: '/auth/login',
    failureFlash: true
  })

);
//////////////////////////////////////////////////////////
//                    TESTING                           //
//////////////////////////////////////////////////////////
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});


//////////////////////////////////////////////////////////
//                                                     //
//////////////////////////////////////////////////////////




module.exports = router;
