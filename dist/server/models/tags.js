"use strict";
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
let _schema = new mongoose_1.Schema({
    tagName: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date
    }
}).pre('save', (next) => {
    console.log('创建 tags');
    let now = new Date();
    this.createdAt = this.createdAt || now;
    next();
}).post('save', () => {
    console.log('保存成功了');
});
exports.Tag = mongoose.model('tags', _schema);
//# sourceMappingURL=tags.js.map