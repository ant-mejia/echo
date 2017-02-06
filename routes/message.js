var express = require('express');
var router = express.Router();
const authHelpers = require('../auth/auth-helpers');
const msg = require('../msgs/msg');
const models = require('../db/models/index');


//get the messages by id
router.get('/:id', function(req, res, next) {
models.Messages.findById(req.params.id).then(function(data) {
  res.render('/message/show', {
    title: 'message',
    messages: msg
  });
});
});

module.exports = router;
