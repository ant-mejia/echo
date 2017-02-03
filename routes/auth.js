const express = require('express');
const router = express.Router();

const authHelpers = require('../auth/auth-helpers');
const passport = require('../auth/local');

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
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});
module.exports = router;
