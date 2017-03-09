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
    if (message) {
      res.render('message/show', {
        title: 'message',
        message: message,
        user: req.user,
        moment: moment
      });
    } else {
      res.redirect('/');
    }
  });
});

router.post('/:id', authHelpers.loginRequired, function(req, res, next) {
  models.Messages.findById(req.params.id).then(function(message) {
    if (message) {
      if (message.originId !== req.user.username) {
        models.Likes.findOrCreate({
            where: {
              originId: message.id,
              senderId: req.user.username,
              recieverId: message.originId
            }
          })
          .spread(function(msg, created) {
            if (created === false) {
              models.Likes.destroy({
                where: {
                  originId: message.id,
                  senderId: req.user.username,
                  recieverId: message.originId
                }
              });
            }
            res.redirect('/');
          });
      }
    } else {
      res.redirect('/');
    }
  });
});

//delete route, id allows you to delete the messages
router.delete('/:id', function(req, res, next) {
  models.Messages.destroy({
    where: {
      id: req.params.id,
      //protects owner from deletes from other users, go to line 15 in message-feed.ejs to see conditional
      originId: req.user.username
    }
  }).then(function(message) {
    res.redirect('/' + req.user.username);
  });
});

module.exports = router;
