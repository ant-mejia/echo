var express = require('express');
var router = express.Router();
const authHelpers = require('../auth/auth-helpers');
const msg = require('../msgs/msg');
const models = require('../db/models/index');


/* GET home page. */
router.get('/', authHelpers.showFeedifUser, (req, res, next) => {
  if (req.user) {
    models.Comments.findAll({}).then(function(comment) {
      console.log(comment)
      res.render('comment-feed', {
        title: req.user.username,
        comments: comment
      });
    });
  } else {
    res.render('index', { title: 'Express' });
  }
});

router.post('/', authHelpers.loginRequired, (req, res, next) => {
  // console.log('comment');
  console.log(req.body)
  let newId;
  models.Comments.create({
    originMsg: req.body.originMessage,
    content: req.body.content,
    location: req.body.location}).then( response => newId = response.dataValues.id );
  res.redirect('/');
});


module.exports = router;
