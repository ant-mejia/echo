var express = require('express');
var router = express.Router();
const authHelpers = require('../auth/auth-helpers');
const msg = require('../msgs/msg');
const models = require('../db/models/index');

/* GET home page. */
router.get('/', authHelpers.showFeedifUser, (req, res, next) => {
  if (req.user) {
    models.Messages.findAll({}).then(function(msgs) {
      res.render('index-feed', {
        title: req.user.username,
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
