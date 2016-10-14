"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var router_1 = require("./router");
var path = require("path");
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    secret: 'abcdef',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}));
app.use(router_1["default"]);
var port = process.env.PORT || 3000;
app.listen(port, function () { return console.log("running on port " + port + " ..."); });
exports.__esModule = true;
exports["default"] = app;
