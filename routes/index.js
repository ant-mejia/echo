const express = require('express');
const router = express.Router();
const authHelpers = require('../auth/auth-helpers');
const msg = require('../msgs/msg');
const models = require('../db/models/index');
const humanize = require('humanize');
const moment = require('moment');

/* GET home page. */
router.get('/', authHelpers.showFeedifUser, (req, res, next) => {
  if (req.user) {
    models.Messages.findAll({}).then(function(msgs) {
      res.render('index-feed', {
        title: req.user.username,
        messages: msgs,
        //this allows me to make the if statement to delete in views/message-feed.ejs, if this is not put then I would not be able to call the req.user.username
        currentUser: req.user.username,
        user: req.user,
        joinDate: moment(req.user.createdAt).fromNow(),
        messages: msgs
      });
    });
  } else {
    res.render('index', { title: 'Express' });
  }
});

router.post('/', authHelpers.loginRequired, (req, res, next) => {
  msg.create(req,res);
  res.redirect('/');
});

module.exports = router;
