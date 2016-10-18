"use strict";
var express_1 = require('express');
// import User from '../models/user';
var router = express_1.Router();
router.get('/', function (req, res) {
    var loginUser = req.body;
    // if(loginUser.user){
    //     User.get(loginUser.user).then((user) => {
    //         if(loginUser.user == user.user && loginUser.passwd == user.passwd){
    //             req.session.user = user;
    //             console.log(user.user, '登录成功');
    //             res.redirect('/admin');
    //         }else{
    //             res.render('login', {
    //                 title: '登陆'
    //             });
    //         }
    //     });
    // }else{
    //     res.render('login', {
    //         title: '登陆'
    //     });
    // }
});
router.post('/', function (req, res) {
    console.log('登录用户为:', req.body);
    var loginUser = req.body;
    // User.get(loginUser.user).then((user) => {
    //     console.log(user)
    //     if(loginUser.user == user.user && loginUser.passwd == user.passwd){
    //         req.session.user = user;
    //         console.log(user.user, '登录成功');
    //         res.redirect('/admin');
    //     }else{
    //         res.send('行行好，再想想密码吧！');
    //     }
    // });
});
exports.__esModule = true;
exports["default"] = router;
