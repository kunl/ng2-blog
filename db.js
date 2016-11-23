"use strict";
var mongoose = require('mongoose');
exports.uri = 'mongodb://localhost/blog';
mongoose.connect(exports.uri, function (err) {
    if (err) {
        console.log(err);
        console.log(err.message);
    }
    else {
        console.log('Connected to MongoDb');
    }
});
exports.__esModule = true;
exports["default"] = mongoose;
