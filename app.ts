/// <reference path="./typings.d.ts" />

import * as express from 'express';
import * as path from 'path';
import * as favicon from 'serve-favicon';
import * as logger from 'morgan';
import * as cookieParser from  'cookie-parser';
import { json, urlencoded } from 'body-parser';


// import './db';

import  router  from './routes';

let app = <express.Application>express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
// app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

// app.use(router);


app.use('admin', (req, res) => {
  res.sendFile('public/admin.html')
})


app.use('*', (req, res) => {
  res.sendFile('public/blog.html')
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err:Error = new Error('Not Found');
  err['status'] = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace


if (app.get('env') === 'development') {
    app.use(<express.ErrorRequestHandler> function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(<express.ErrorRequestHandler> function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


export = app;