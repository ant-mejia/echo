const bcrypt = require('bcryptjs');

const models = require('../db/models/index');

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

function loginRedirect(req, res, next) {
  if (req.user) res.redirect('/user');

  return next();
}

//user registration. These are the information the user will provide
function createUser(req, res) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);

  return models.Users.create({
    username: req.body.username,
    password: hash,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    dob: req.body.dob
  });
}

function loginRequired(req, res, next) {
  if (!req.user) res.redirect('/login');

  return next();
}

function showFeedifUser(req, res, next) {

  return next();
}

module.exports = {
  comparePass,
  loginRedirect,
  loginRequired,
  createUser,
  showFeedifUser
};
