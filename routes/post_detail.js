"use strict";
var post_1 = require("../models/post");
var dateformat = require("dateformat");
exports.__esModule = true;
exports["default"] = function (req, res, next) {
    var title = req.params.title;
    console.log(req.params);
    post_1["default"].getPostByTitle(title).then(function (post) {
        if (post) {
            post.createDate = dateformat(post.createDate, 'yyyy年mm月dd日');
            post.updateDate = dateformat(post.updateDate, 'yyyy年mm月dd日 HH:MM:ss');
            res.render('post', {
                title: post.title,
                post: post,
                desc: post.content.substr(0, 50)
            });
        }
        else {
            next();
        }
    });
};
