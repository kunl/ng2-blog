"use strict";
var _this = this;
var mongoose = require('mongoose');
var mongoose_1 = require('mongoose');
var _schema = new mongoose_1.Schema({
    tagName: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date
    }
}).pre('save', function (next) {
    console.log('创建 tags');
    var now = new Date();
    _this.createdAt = _this.createdAt || now;
    next();
}).post('save', function () {
    console.log('保存成功了');
});
exports.Tag = mongoose.model('tags', _schema);
