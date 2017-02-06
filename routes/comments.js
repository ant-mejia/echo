var express = require('express');
var router = express.Router();
const authHelpers = require('../auth/auth-helpers');
const msg = require('../msgs/msg');
const models = require('../db/models/index');


router.get('/new', function(req, res, next) {
  res.render('msg/new');
});

router.post('/', function(req, res, next) {
  models.Comments.create({
      content: req.body.content
  }).then(function() {
    res.redirect('user/show')
  });
});

router.get('/:id', function(req, res, next) {
models.Comments.findById(req.params.id).then(function(message) {
  res.render('comments/show', {
    senderId: senderId,
    content: content
  });
});
});


module.exports = router;
