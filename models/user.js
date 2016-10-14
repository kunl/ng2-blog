"use strict";
var db_1 = require("./db");
var default_1 = (function () {
    function default_1() {
    }
    default_1.get = function (user) {
        return new Promise(function (resolve, reject) {
            db_1["default"].createConnection(function (err, connection) {
                connection.query('SELECT ?? FROM user where user = ?', [['user', 'passwd', 'nickName'], user], function (err, result) {
                    if (err) {
                        reject(err);
                    }
                    resolve(result[0]);
                });
            });
        });
    };
    return default_1;
}());
exports.__esModule = true;
exports["default"] = default_1;
