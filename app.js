var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var compass = require('node-compass');
var http = require('http');
var mongoose = require('mongoose');
//var _ = require('lodash');
var mongoLocal = ("mongodb://localhost/MyMeanWebsite");
var uri = process.env.MONGOLAB_URI;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//Static Bower Route
app.use(express.static(__dirname + '/app'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(compass()); Removing for Heroku compatibility
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', process.env.PORT || '3000');

//Add CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-type');
  next();
});

app.use(require('./routes'));

mongoose.connect(uri || mongoLocal , function (error) {
  if (error) console.error(error);
  else console.log('mongo connected');
});

var db = mongoose.connection;

db.once('open' ,function(){

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port: ' + app.get('port'));
  });

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

// error handlers

// development error handler
// will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
    });
  }

// production error handler
// no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });

});//end mongodb connection

module.exports = app;
