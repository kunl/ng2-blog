"use strict";
const express_1 = require("express");
const models_1 = require("../models");
let _router = express_1.Router();
/* GET users listing. */
_router.get('/posts', (req, res, next) => {
    console.log('### 查询 users ###');
    models_1.Post.find().exec().then(post => {
        console.log('查询到文章共', post.length, '条');
        res.json({
            data: post
        });
    }, err => {
        console.log(err);
        res.status(500);
    });
});
_router.get('/posts/:title', (req, res, next) => {
    let title = req.params;
    models_1.Post.findOne({ title }).exec(post => {
        console.log(post);
        res.json({ data: post });
    });
});
_router.post('/posts', (req, res, next) => {
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