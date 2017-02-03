const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const init = require('./passport');
const models = require('../db/models/index');
const authHelpers = require('../auth/auth-helpers');
const options = {};

init();
// contains the details of our local strategy.
// the user will log in with a username and password.
// This is contrasted with other strategies such as oauth strategies,
// which allow users to log in with various other accounts such as
// their facebook account

passport.use(new LocalStrategy(options, (username, password, done) => {
  models.User.findAll({
    where: {
      username
    }
  })
  .then((user) => {
    if (user[0] === undefined) {
      return done(null, false);
    }
    if (!authHelpers.comparePass(password, user[0].dataValues.password)) {
      return done(null, false);
    } else {
      return done(null, user[0].dataValues);
    }
  })
}));

module.exports = passport;
