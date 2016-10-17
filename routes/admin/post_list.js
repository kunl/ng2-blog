"use strict";
var post_1 = require("../../models/post");
exports.__esModule = true;
exports["default"] = function (req, res) {
    var title = req.params.title;
    post_1["default"].getPostByTitle(title).then(function (post) {
        if (post) {
            res.render('post', {
                title: post.title,
                post: post
            });
        }
        else {
            res.status(404).render('404', {
                title: 404
            });
        }
    });
};
