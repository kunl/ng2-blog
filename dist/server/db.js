"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
const config_1 = require("./config");
let pool = mysql.createPool(Object.assign({}, config_1.db));
exports.default = pool;
//# sourceMappingURL=db.js.map