"use strict";
var express_1 = require("express");
var user_1 = require("../models/user");
var router = express_1.Router();
router.get('/', function (req, res) {
    var loginUser = req.body;
    if (loginUser.user) {
        user_1["default"].get(loginUser.user).then(function (user) {
            if (loginUser.user == user.user && loginUser.passwd == user.passwd) {
                req.session.user = user;
                console.log(user.user, '登录成功');
                res.redirect('/admin');
            }
            else {
                res.render('login', {
                    title: '登陆'
                });
            }
        });
    }
    else {
        res.render('login', {
            title: '登陆'
        });
    }
});
router.post('/', function (req, res) {
    console.log('登录用户为:', req.body);
    var loginUser = req.body;
    user_1["default"].get(loginUser.user).then(function (user) {
        console.log(user);
        if (loginUser.user == user.user && loginUser.passwd == user.passwd) {
            req.session.user = user;
            console.log(user.user, '登录成功');
            res.redirect('/admin');
        }
        else {
            res.send('行行好，再想想密码吧！');
        }
    });
});
exports.__esModule = true;
exports["default"] = router;
