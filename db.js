"use strict";
var mongoose_1 = require('mongoose');
var mongoose = new mongoose_1.Mongoose();
mongoose.Promise = global.Promise;
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
