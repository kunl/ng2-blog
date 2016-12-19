"use strict";
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const body_parser_1 = require("body-parser");
// 路径为 dist/server/app
require("./db");
const routes_1 = require("./routes");
let __root_path = 'server';
let app = express();
// view engine setup
app.set('views', path.join(__root_path, 'views'));
app.set('view engine', 'ejs');
app.use(body_parser_1.json());
app.use(body_parser_1.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join('public')));
app.use('/api', routes_1.default);
app.use('/admin', (req, res) => {
    res.render('admin', { title: 'kunl 管理' });
});
app.use('/*', (req, res) => {
    res.render('blog', { title: 'kunl' });
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
module.exports = app;
//# sourceMappingURL=app.js.map