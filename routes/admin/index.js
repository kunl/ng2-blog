"use strict";
var express_1 = require('express');
var _router = express_1.Router();
/* GET admin page. */
_router.get('/admin', function (req, res) {
    // let user = req.session['user'];
    res.render('admin/ngadmin', {
        title: '后台',
        nickname: 'user.nickName'
    });
    // if(user && user.user){
    //     res.render('admin', {
    //         title: '后台',
    //         nickname: user.nickName
    //     });
    // }else{
    //     res.redirect('/login');
    // }
});
exports.admin = _router;
