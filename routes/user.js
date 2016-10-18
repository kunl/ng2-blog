"use strict";
var express_1 = require('express');
var router = express_1.Router();
var models_1 = require('../models');
/* GET users listing. */
router.get('/user', function (req, res, next) {
    // User.create(<IUser>{
    //     id: '231452',
    //     name: 'ssgsgdgdgd名字',
    //     age: 30
    // })
    models_1.User.findTop();
    console.log('### 查询 users ###');
    models_1.User.findOne().then(function (user) {
        console.log(user);
        // res.send('ok')
        res.render('index', { title: user.name });
    }, function (err) {
        console.log(err);
        res.status(500);
    });
});
exports.user = router;
