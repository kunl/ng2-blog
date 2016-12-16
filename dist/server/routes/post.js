"use strict";
const express_1 = require("express");
const models_1 = require("../models");
let _router = express_1.Router();
/* GET users listing. */
_router.get('/list', (req, res, next) => {
    console.log('### 查询 users ###');
    models_1.Post.find().exec().then(post => {
        console.log(post);
        res.render('post', { title: '列表', list: post });
    }, err => {
        console.log(err);
        res.status(500);
    });
});
_router.get('/post/:title', (req, res, next) => {
    res.render('post', { title: 'post list aaaaaa' });
});
_router.post('/post', (req, res, next) => {
    console.log('### 新建 post ###');
    console.log(req.body);
    models_1.Post.create(req.body).then(post => {
        console.log(post);
        res.redirect('/');
    }, err => {
        console.log(err);
        res.status(500);
        res.end();
    });
});
_router.put('/post', (req, res, next) => {
});
_router.delete('/post', (req, res, next) => {
});
exports.post = _router;
//# sourceMappingURL=post.js.map