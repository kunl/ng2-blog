"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const body_parser_1 = require("body-parser");
const routes_1 = require("./routes");
let __root_path = 'server';
let app = express();
exports.app = app;
// view engine setup
app.set('views', path.join(__root_path, 'views'));
app.set('view engine', 'ejs');
app.use(body_parser_1.json());
app.use(body_parser_1.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join('public')));
const home_1 = require("./routes/home");
app.use('/', home_1.home);
app.use('/api', routes_1.default);
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
//# sourceMappingURL=app.js.map