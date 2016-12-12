"use strict";
var express_1 = require("express");
var models_1 = require("../models");
var _router = express_1.Router();
/* GET users listing. */
_router.get('/list', function (req, res, next) {
    console.log('### 查询 users ###');
    models_1.Post.find().exec().then(function (post) {
        console.log(post);
        res.render('post', { title: '列表', list: post });
    }, function (err) {
        console.log(err);
        res.status(500);
    });
});
_router.get('/post/:title', function (req, res, next) {
    res.render('post', { title: 'post list aaaaaa' });
});
_router.post('/post', function (req, res, next) {
    console.log('### 新建 post ###');
    console.log(req.body);
    models_1.Post.create(req.body).then(function (post) {
        console.log(post);
        res.redirect('/');
    }, function (err) {
        console.log(err);
        res.status(500);
        res.end();
    });
});
_router.put('/post', function (req, res, next) {
});
_router.delete('/post', function (req, res, next) {
});
exports.post = _router;
