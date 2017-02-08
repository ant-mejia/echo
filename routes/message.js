var express = require('express');
var router = express.Router();
const authHelpers = require('../auth/auth-helpers');
const msg = require('../msgs/msg');
const models = require('../db/models/index');
const moment = require('moment');


//get the messages by id
//route to display the show page with the message passed in
router.get('/:id', authHelpers.loginRequired, function(req, res, next) {
models.Messages.findById(req.params.id).then(function(message) {
  res.render('message/show', {
    title: 'message',
    message: message,
    user: req.user,
    moment: moment
  });
});
});

module.exports = router;
