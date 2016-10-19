"use strict";
var _this = this;
var mongoose_1 = require('mongoose');
var db_1 = require('../db');
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
_schema.statics.findTop = function () {
    console.log('find all');
};
exports.User = db_1["default"].model('Users', _schema);
