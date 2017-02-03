var express = require('express');
var router = express.Router();
var authHelpers = require('../auth/auth-helpers');

/* GET users listing. */


//get user route
router.get('/', authHelpers.loginRequired, (req, res, next) => {
  res.render('user/index', {
    user: req.user.dataValues,
    title: 'user',
    currentRoute: 'user'
  });
});


module.exports = router;
