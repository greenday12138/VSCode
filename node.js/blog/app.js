var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session=require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter=require('./routes/login');
var logonRouter=require('./routes/logon');
var editRouter=require('./routes/edit');
var modifyRouter=require('./routes/modify');
var aboutRouter=require('./routes/about');
var friendsRouter=require('./routes/friends');
var articleRouter=require('./routes/article');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//user info session
app.use(session({
  secret:'blog',
  cookie:{maxAge:1000*60*24*30},
  resave:false,
  saveUninitialized:true
}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/index', indexRouter);
app.use('/user', usersRouter);
app.use('/',loginRouter);
app.use('/logon',logonRouter);
app.use('/edit',editRouter);
app.use('/modify',modifyRouter);
app.use('/about',aboutRouter);
app.use('/friends',friendsRouter);
app.use('/article',articleRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
