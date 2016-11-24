"use strict";
var express_1 = require("express");
var _router = express_1.Router();
var controller_1 = require("../controller");
/* GET home page. */
_router.get('/index', function (req, res, next) {
    res.redirect('/');
});
_router.get('/', function (req, res, next) {
    controller_1.post.find().then(function (list) {
        console.log("\u6E32\u67D3\u5217\u8868 \u5171 " + list.length + "\u6761");
        res.render('index', { title: '列表', list: list });
    }, function (err) {
        console.log(err);
        res.status(500);
    });
});
exports.home = _router;
