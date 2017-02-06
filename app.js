<<<<<<< HEAD
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var port = 3200;

var index = require('./routes/index');

//trouble had my routes named as users instead of user
var users = require('./routes/user');
//added
var passport = require('passport');
var session = require('express-session');
//added routes
var authRoutes = require('./routes/auth.js');
var userRoutes = require('./routes/user.js');
var commentRoutes = require('./routes/comments.js');
//added for editing
var methodOverride = require('method-override');

var app = express();
//added
require('dotenv').config();
//use edditing
app.use(methodOverride('_method'));

=======
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// add new modules and files here
const session = require('express-session');
const passport = require('passport');

const index = require('./routes/index');
const authRoutes = require('./routes/auth.js');
const userRoutes = require('./routes/user.js');
const app = express();
// load environment variables
require('dotenv').config();
>>>>>>> b7f7312315e069c4a536ca48dc05196b3cf3476b
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
<<<<<<< HEAD
app.use(cookieParser());
app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false,
  sourceMap: true
=======
// add new express-session and passport middleware here
// telling express to use express-session for secretKey
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUnintialized: true
>>>>>>> b7f7312315e069c4a536ca48dc05196b3cf3476b
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));

<<<<<<< HEAD
// added for express-session and passport require
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true
}));
//not sure if i should add
app.use(passport.initialize());
app.use(passport.session());



app.use('/', index);
// app.use('/users', users);
//ADDED USER ROUTES
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/comments', commentRoutes);
=======
// add route middleware here
app.use('/', index);
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

>>>>>>> b7f7312315e069c4a536ca48dc05196b3cf3476b

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(port);
console.log("Listening on port " + port);

module.exports = app;
//sequelize model:create --name Users --attributes "username:string(255) password:text email:string(128) firstName:string(255) lastName:string(255) rank:int"
