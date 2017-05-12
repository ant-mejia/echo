/*jshint esversion:6*/
var express = require('express');
var router = express.Router();
const authHelpers = require('../auth/auth-helpers');
const msg = require('../msgs/msg');
const models = require('../db/models/index');
const moment = require('moment');

// Logic for implementing user levels
function rank(num) {
  num = num < 1
    ? 1
    : num;
  return Math.floor((num / (Math.sqrt(num))) / Math.E) + 1;
}
/* GET home page. */
router.get('/', authHelpers.showFeedifUser, (req, res, next) => {
  let user = null;
  if (req.user) {
    user = req.user;
    models.Messages.findAll({
      order: [
        ['createdAt', 'DESC']
      ]
    }).then(function(msgs) {
      models.Likes.findAndCountAll({
        where: {
          senderId: req.user.username
        }
      }).then(function(likes) {
        models.Likes.count({
          where: {
            recieverId: req.user.username
          }
        }).then(function(userRank) {
          console.log('AAAAAAAAA', userRank)
          res.render('index-feed', {
            title: req.user.username,
            user: user,
            level: rank(userRank),
            messages: msgs,
            moment: moment,
            likes: likes.rows
          });
        });
      })
    });
  } else {
    res.render('index', {
      title: 'Echo',
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
  msg.create(req, res);
  const clientIp = requestIp.getClientIp(req);
  console.log('CLIENTIP ADDRESS', clientIp);
  res.redirect('/');
});

module.exports = router;
