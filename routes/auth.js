const express = require('express');
const router = express.Router();

const authHelpers = require('../auth/auth-helpers');
const passport = require('../auth/local');

<<<<<<< HEAD
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
=======
router.get('/register', authHelpers.loginRedirect, (req, res) => {
  res.render('auth/register');
});
//create a new user with the data from the user form
router.post('/register', (req, res, next) => {
  return authHelpers.createUser(req, res)
  .then((response) => {
    console.log('registration successful');
  })
  .catch((err) => { res.status(500).json({ status: 'error' });
  });
});
// this provides a page to login
router.get('/login', authHelpers.loginRedirect, (req, res)=> {
  res.render('auth/login');
});
router.post('/login', passport.authenticate('local', {
  successRedirect: '/user',
  failureRedirect: '/auth/login',
  failureFlash: false
  })
);
//This logs the user out/kills the session,
//then redirects the user to the homepage
>>>>>>> b7f7312315e069c4a536ca48dc05196b3cf3476b
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});
<<<<<<< HEAD


//////////////////////////////////////////////////////////
//                                                     //
//////////////////////////////////////////////////////////




=======
>>>>>>> b7f7312315e069c4a536ca48dc05196b3cf3476b
module.exports = router;
