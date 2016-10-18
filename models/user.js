"use strict";
var _this = this;
var mongoose_1 = require('mongoose');
var mongoose = require('mongoose');
var _schema = new mongoose_1.Schema({
    id: String,
    created: Date,
    updated: Date,
    name: String,
    age: Number
})
    .pre('save', function (next) {
    console.log(_this);
    _this.updated = new Date;
    next();
});
/**
 * 实例上的方法
 * let user = new User();
 * user.findTop();
 */
_schema.methods.findTop = function () {
    console.log(333);
};
_schema.statics.findTop = function () {
    console.log('find all');
};
exports.User = mongoose.model('Users', _schema);
