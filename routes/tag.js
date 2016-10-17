"use strict";
var tags_1 = require("../models/tags");
exports.__esModule = true;
exports["default"] = function (req, res, next) {
    var tag = req.params.tagName;
    tags_1["default"].getPostByTag(tag).then(function (posts) {
        console.log(posts);
    });
};
