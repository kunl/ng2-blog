
import * as express from 'express';
import * as path from 'path';
import * as cookieParser from 'cookie-parser';
import { json, urlencoded } from 'body-parser';

import * as webpack from 'webpack';

// 路径为 dist/server/app
let config = require('../../webpack.config');
// import './db';

import router from './routes';

let __root_path = 'server';

let app = <express.Application>express();

// view engine setup
app.set('views', path.join(__root_path, 'views'));
app.set('view engine', 'ejs');

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join('public')));


app.use(router);


app.use('/admin', (req, res) => {
    res.render('admin', { title: '咧白哦发噶似的' })
})
app.use('/', (req, res) => {
    res.render('blog', { title: '咧白哦发噶似的' })
})


// app.use('*', (req, res) => {
//     res.render('index', { title: '咧白哦发噶似的', list: [] })
// })

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err: Error = new Error('Not Found');
    err['status'] = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace


if (app.get('env') === 'development') {
    app.use(<express.ErrorRequestHandler>function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(<express.ErrorRequestHandler>function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


export = app;