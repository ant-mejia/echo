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
var messageRoutes = require('./routes/message.js');
//added for editing
var methodOverride = require('method-override');

var humanize = require('humanize');

var app = express();
//added
require('dotenv').config();
//use edditing
app.use(methodOverride('_method'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false,
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

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
app.use('/', authRoutes);
app.use('/user', userRoutes);
app.use('/messages', messageRoutes);

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

{/* <li class="message">
  <div>
    <span class="title"><a href="message/show"><%= item.content %></a></span>
    <p><span class="sender ">@<%= item.originId %><span class="">Today</span></p>
    </div>
  </li>
  <% }) %>
  <form class="new-comment" action="/" method="post">
    <input class="uk-input uk-form-blank uk-text-success uk-form-width-small db" type="text" name="content" placeholder="Reply to Status">
      <button class="uk-button uk-button-primary uk-button-small" type="submit">Reply</button>
    </form>
  </li> */}
