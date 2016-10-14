"use strict";
var config_1 = require("../config");
var mysql = require("mysql");
exports.__esModule = true;
exports["default"] = mysql.createPool({
    host: config_1["default"].host,
    user: config_1["default"].user,
    password: config_1["default"].passwd,
    database: config_1["default"].db
});
