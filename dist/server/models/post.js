"use strict";
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
exports.ObjectId = mongoose.Schema.Types.ObjectId;
let _schema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String
    },
    tags: [
        {
            type: exports.ObjectId,
            ref: 'tags'
        }
    ],
    createdAt: {
        type: Date
    },
    modifiedAt: {
        type: Date
    }
}).pre('save', function (next) {
    let now = new Date();
    this.createdAt = this.createdAt || now;
    this.modifiedAt = now;
    next();
});
exports.Post = mongoose.model('posts', _schema);
//# sourceMappingURL=post.js.map