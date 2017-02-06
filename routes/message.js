var express = require('express');
var router = express.Router();
const authHelpers = require('../auth/auth-helpers');
const msg = require('../msgs/msg');
const models = require('../db/models/index');


//get the messages by id
// router.get('/:id', function(req, res, next) {
// models.Messages.findById(req.params.id).then(function(message) {
//   res.render('/message/show', {
//     title: 'message',
//     messages: msg
//   });
// });
// });

//not working yet
router.get('/:id/show', function(req, res, next) {
  models.Messages.findById(req.params.id).then(function(Messages) {
    res.render('message/show', { message: message });
  });
});

module.exports = router;
