var express = require('express');
var router = express.Router();
const authHelpers = require('../auth/auth-helpers');

/* GET home page. */
router.get('/', authHelpers.showFeedifUser, (req, res, next) => {
  if (!req.user) {
    res.render('index-feed', {
      messages: [
        {
          content: 'Hello World'
        },
        {
          content: 'Hello World - This is another one'
        },
        {
          content: 'Hello World'
        },
        {
          content: 'Hello World - This is another one'
        },{
          content: 'Hello World'
        },
        {
          content: 'Hello World - This is another one'
        },{
          content: 'Hello World'
        },
        {
          content: 'Hello World - This is another one'
        },{
          content: 'Hello World'
        },
        {
          content: 'Hello World - This is another one'
        },{
          content: 'Hello World'
        },
        {
          content: 'Hello World - This is another one'
        },{
          content: 'Hello World'
        },
        {
          content: 'Hello World - This is another one'
        }
      ]}
    );
  } else {
    res.render('index', { title: 'Express' });
  }
});

module.exports = router;
