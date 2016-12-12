"use strict";
var marked = require("marked");
var models_1 = require("../models");
var PostController = (function () {
    function PostController() {
        this._post = models_1.Post;
    }
    PostController.prototype.find = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._post
                .find()
                .populate('tags')
                .sort({ createdAt: -1 })
                .limit(10)
                .exec(function (err, res) {
                console.log('查找列表 成功 ！！！');
                if (err) {
                    reject(err);
                }
                else {
                    if (res.length) {
                        res.forEach(function (post) {
                            post.content = marked(post.content);
                        });
                        resolve(res);
                    }
                    else {
                        resolve(null);
                    }
                }
            });
        });
    };
    PostController.prototype.new = function (post) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._post.create(post).then(function (p) {
                resolve(p);
            }, function (err) {
                reject(err);
            });
        });
    };
    return PostController;
}());
exports.post = new PostController();
