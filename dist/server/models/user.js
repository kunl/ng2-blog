"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose = require("mongoose");
let _schema = new mongoose_1.Schema({
    id: String,
    created: Date,
    updated: Date,
    name: String,
    age: Number
})
    .pre('save', (next) => {
    console.log(this);
    this.updated = new Date;
    next();
});
/**
 * 实例上的方法
 * let user = new User();
 * user.findTop();
 */
_schema.statics.findTop = () => {
    console.log('find all');
};
exports.User = mongoose.model('Users', _schema);
//# sourceMappingURL=user.js.map