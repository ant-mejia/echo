var express = require('express');
var router = express.Router();
const authHelpers = require('../auth/auth-helpers');
const msg = require('../msgs/msg');
const models = require('../db/models/index');
const moment = require('moment');

function rank(num) {
  num = num < 1 ? 1 : num;
  console.log(num);
  return Math.floor((num / (Math.sqrt(num))) / Math.E) + 1;
}
/* GET home page. */
router.get('/', authHelpers.showFeedifUser, (req, res, next) => {
  if (req.user) {
    models.Messages.findAll({
      order: [['createdAt', 'DESC']]
    }).then(function(msgs) {
      res.render('index-feed', {
        title: req.user.username,
        user: req.user,
        joinDate: moment(req.user.createdAt).fromNow(),
        level: rank(req.user.rank),
        messages: msgs,
        moment: moment
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
