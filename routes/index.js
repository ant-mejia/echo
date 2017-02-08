var express = require('express');
var router = express.Router();
const authHelpers = require('../auth/auth-helpers');
const msg = require('../msgs/msg');
const models = require('../db/models/index');
const moment = require('moment');

// Logic for implementing user levels
function rank(num) {
  num = num < 1 ? 1 : num;
  return Math.floor((num / (Math.sqrt(num))) / Math.E) + 1;
}
/* GET home page. */
router.get('/', authHelpers.showFeedifUser, (req, res, next) => {
  let user = null;
  if (req.user) {
    user = req.user;
    models.Messages.findAll({
      order: [['createdAt', 'DESC']]
    }).then(function(msgs) {
      res.render('index-feed', {
        title: req.user.username,
        user: user,
        level: rank(req.user.rank),
        messages: msgs,
        moment: moment
      });
    });
  } else {
    res.render('index', {
      title: 'Express',
      user: user
    });
  }
});

router.get('/about', (req, res, next) => {
  let user = null;
  if (req.user) {
    user = req.user;
  }
  res.render('about', {
    title: 'About Us',
    user: user
  });
});

router.get('/contact', (req, res, next) => {
  let user = null;
  if (req.user) {
    user = req.user;
  }
  res.render('contact', {
    title: 'Contact Us',
    user: user
  });
});

router.post('/', authHelpers.loginRequired, (req, res, next) => {
  msg.create(req,res);
  res.redirect('/');
});

module.exports = router;
