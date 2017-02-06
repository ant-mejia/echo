const passport = require('passport');
const models = require('../db/models/index');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
<<<<<<< HEAD

  passport.deserializeUser((id, done) => {
    models.Users.findById(id)
=======
  passport.deserializeUser((user, done) => {
    models.User.findById(id)
>>>>>>> b7f7312315e069c4a536ca48dc05196b3cf3476b
    .then((user) => { done(null, user); })
    .catch((err) => { done(err, null); });
  });
};
<<<<<<< HEAD
=======
//two functions, one to serialize the user and
//one to deserialize the user. Serializing is a process
// whereby we take the user info. in the form of something
// like a json object and turn it into a format the computer
// can store in a session in memory. Deserialization is when
// the user data is plucked out of the session memory and
// converted to something like a json object so the app can
// do stuff with the data, e.g. get the user's email or username.
>>>>>>> b7f7312315e069c4a536ca48dc05196b3cf3476b
