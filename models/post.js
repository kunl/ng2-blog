"use strict";
var mongoose = require('mongoose');
var mongoose_1 = require('mongoose');
var db_1 = require('../db');
exports.ObjectId = mongoose.Schema.Types.ObjectId;
var _schema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: false
    },
    modifiedAt: {
        type: Date,
        required: false
    }
}).pre('save', function (next) {
    var now = new Date();
    this.createdAt = this.createdAt || now;
    this.modifiedAt = now;
    next();
});
exports.Post = db_1["default"].model('posts', _schema);
// export class HeroModel {
//   private _heroModel: IPost;
//   static findHero(name: string): Promise<IPost> {
//     let p = new Promise((resolve, reject) => {
//       let repo = new HeroRepository();
//       repo.find({ name: name }).sort({ createdAt: -1 }).limit(1).exec((err, res) => {
//         if (err) {
//           reject(err);
//         }
//         else {
//           if (res.length) {
//             resolve(res[0]);
//           }
//           else {
//             resolve(null);
//           }
//         }
//       });
//     });
//     return p;
//   }
// }
