"use strict";
var post_1 = require("../models/post");
exports.__esModule = true;
exports["default"] = function (req, res) {
    var post = new post_1["default"]({
        title: 'post.title',
        content: 'post.content',
        author: 'post.author'
    });
    post_1["default"].getHomePost().then(function (result) {
        res.render('home', {
            title: '主页',
            posts: result,
            desc: 'kunl 的前端博客'
        });
    });
};
