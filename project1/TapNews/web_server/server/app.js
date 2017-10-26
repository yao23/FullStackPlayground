var express = require('express');
var path = require('path');
var cors = require('cors');

var index = require('./routes/index');
var news = require('./routes/news');
var config = require('./config/config.json');
var _ = require('./models/main.js').connect(config.mongoDbUri); // _ for meaningless variable, no later usage, just for require
var authCheckMiddleware = require('./middleware/auth_checker');
var passport = require('passport');
var app = express();

// Load passport strategies
app.use(passport.initialize());
var localSignUpStrategy = require('./passport/signup_passport');
var localLogInStrategy = require('./passport/login_passport');
passport.use('local-signup', localSignUpStrategy);
passport.use('local-login', localLogInStrategy);

// view engine setup
app.set('views', path.join(__dirname, '../client/build'));
app.set('view engine', 'jade');

app.use('/static', express.static(path.join(__dirname, '../client/build/static/')));

// TODO: remove this after development is done
app.use(cors());

app.use('/', index);
app.use('/news', authCheckMiddleware);
app.use('/news', news);

app.use(function(req, res, next) {
  res.status(404);
});

module.exports = app;
