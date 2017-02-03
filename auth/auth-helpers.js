const bcrypt = require('bcryptjs');
const models = require('../db/models/index');

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}
//function that will use bcrypt to compare passwords
function loginRedirect(req, res, next) {
  if (req.user)
    return res.status(401).json(
      { status: 'You are already logged in' }
      );
    return next();
}
//function to show redirect a logged in user to their user profile
// page if they're already logged in. We don't want logged
// in users accessing the register page
function createUser(req, res) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);

  return models.User.create({
    username: req.body.username,
    password: hash,
    email: req.body.email
  }).then(() => {
    res.redirect('/');
  });
}
//this function will create the user based on criteria
// and encrypt password
function loginRequired(req, res, next) {
  if (!req.user) return res.status(401).json({ status: 'Please log in' });
  return next();
}
module.exports = {
  comparePass,
  loginRedirect,
  loginRequired,
  createUser
}
