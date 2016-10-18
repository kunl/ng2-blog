"use strict";
var express_1 = require('express');
var post_1 = require('../../models/post');
var router = express_1.Router();
router.get('/', function (req, res) {
    var user = req.session['user'];
    if (user && user.user) {
        res.render('admin', {
            title: '后台',
            nickname: user.nickName
        });
    }
    else {
        res.redirect('/login');
    }
});
router.post('/post', function (req, res) {
    if (req.body.title && req.body.content) {
        var post = new post_1["default"](req.body);
    }
    console.log(req.body);
});
exports.__esModule = true;
exports["default"] = router;
