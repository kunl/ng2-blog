"use strict";
var _this = this;
var mongoose_1 = require("mongoose");
var db_1 = require("../db");
var _schema = new mongoose_1.Schema({
    id: String,
    created: Date,
    updated: Date,
    name: String,
    age: Number
})
    .pre('save', function (next) {
    _this.updated = new Date;
    next();
});
var _model = db_1["default"].model('Users', _schema);
var User = (function () {
    function User() {
    }
    User.findById = function (id) {
        return new Promise(function (resolve, reject) {
            _model.findById(id).exec().then(function (u) { return u; });
        });
    };
    User.create = function (user) {
        return new Promise(function (resolve, reject) {
            _model.create(user).then(function (u) { return u; });
        });
    };
    return User;
}());
exports.User = User;
// export default class {
//     static get(user){
//         return new Promise((resolve, reject) => {
//             pool.createConnection((err, connection) => {
//                 connection.query('SELECT ?? FROM user where user = ?', [['user', 'passwd', 'nickName'], user], (err, result) => {
//                     if(err){
//                         reject(err);
//                     }
//                     resolve(result[0]);
//                 })
//             })
//         });
//     }
// }
