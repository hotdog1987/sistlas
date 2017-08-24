(function() {
  'use strict';

  var express = require('express');
  var path = require('path');
  var logger = require('morgan');
  var cookieParser = require('cookie-parser');
  var bodyParser = require('body-parser');
  var mongoose = require('mongoose');
  var config = require('./config');

  require('newrelic');

  var apis = require('./routes/api');
  var routes = require('./routes/index');

  var app = express();

  mongoose.connect(config.mongoURI, {useMongoClient: true}, function (error) {
      if (error) {
          console.log(error);
      }
  });

  app.set('production',process.env.NODE_ENV === 'production');

  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'hbs');

  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use('/bower',express.static(path.join(__dirname, 'public/bower')));
  app.use(express.static(path.join(__dirname, 'public/app')));
  //app.use('/dist',express.static(path.join(__dirname, 'public/dist')));

  app.use('/api', apis);
  app.use('/*', routes);

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


  module.exports = app;

})();