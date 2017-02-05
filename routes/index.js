var express = require('express');
var router = express.Router();
const authHelpers = require('../auth/auth-helpers');
const models = require('../db/models/index');

/* GET home page. */
router.get('/', authHelpers.showFeedifUser, (req, res, next) => {
  if (req.user) {
    models.Messages.findAll({}).then(function(msg) {
      res.render('index-feed', {
        title: 'Directors',
        messages: msg
      });
    });
  } else {
    res.render('index', { title: 'Express' });
  }
});

module.exports = router;
