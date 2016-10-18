"use strict";
var express_1 = require('express');
var models_1 = require('../models');
var _router = express_1.Router();
/* GET users listing. */
_router.get('/list', function (req, res, next) {
    console.log('### 查询 users ###');
    models_1.User.findById('222').then(function (user) {
        console.log(user);
        // res.send('ok')
        res.render('index', { title: user.name });
    }, function (err) {
        console.log(err);
        res.status(500);
    });
});
_router.get('/post', function (req, res, next) {
    res.render('post', { title: 'post list aaa' });
});
_router.post('/post', function (req, res, next) {
    console.log('### 新建 post ###');
    console.log(req.body);
    res.send(req.body);
});
_router.put('/post', function (req, res, next) {
});
_router.delete('/post', function (req, res, next) {
});
// _router.get
exports.post_router = _router;
