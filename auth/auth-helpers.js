const bcrypt = require('bcryptjs');
<<<<<<< HEAD

=======
>>>>>>> b7f7312315e069c4a536ca48dc05196b3cf3476b
const models = require('../db/models/index');

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}
<<<<<<< HEAD

function loginRedirect(req, res, next) {
  if (req.user) res.redirect('/user');

  return next();
}

//user registration. These are the information the user will provide
=======
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
>>>>>>> b7f7312315e069c4a536ca48dc05196b3cf3476b
function createUser(req, res) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);

<<<<<<< HEAD
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
  if (!req.user) res.redirect('/auth/login');

  return next();
}

function showFeedifUser(req, res, next) {

  return next();
}

=======
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
>>>>>>> b7f7312315e069c4a536ca48dc05196b3cf3476b
module.exports = {
  comparePass,
  loginRedirect,
  loginRequired,
<<<<<<< HEAD
  createUser,
  showFeedifUser
};
=======
  createUser
}
>>>>>>> b7f7312315e069c4a536ca48dc05196b3cf3476b
