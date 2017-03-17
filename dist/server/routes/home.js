"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let _router = express_1.Router();
const controller_1 = require("../controller");
_router.get('/', (req, res, next) => {
    console.log('home...');
    controller_1.post.find().then(list => {
        console.log(`渲染列表 共 ${list.length}条`);
        res.render('index', { title: '列表', list: list });
    }, err => {
        console.log(err);
    });
});
_router.get('/post/:id', (req, res, next) => {
    console.log('detail...');
    controller_1.post.findOne(req.params.id).then(data => {
        res.render('post', { title: data.title, post: data });
    }, err => {
        console.log(err);
    });
});
_router.get('/about', (req, res) => {
    res.render('about', { title: '关于' });
});
_router.get('/admin', (req, res) => {
    res.render('admin', { title: 'kunl 管理' });
});
exports.home = _router;
//# sourceMappingURL=home.js.map