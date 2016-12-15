"use strict";
const marked = require("marked");
const models_1 = require("../models");
class PostController {
    constructor() {
        this._post = models_1.Post;
    }
    find() {
        return new Promise((resolve, reject) => {
            this._post
                .find()
                .populate('tags')
                .sort({ createdAt: -1 })
                .limit(10)
                .exec((err, res) => {
                console.log('查找列表 成功 ！！！');
                if (err) {
                    reject(err);
                }
                else {
                    if (res.length) {
                        res.forEach((post) => {
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
    }
    new(post) {
        return new Promise((resolve, reject) => {
            this._post.create(post).then((p) => {
                resolve(p);
            }, err => {
                reject(err);
            });
        });
    }
}
exports.post = new PostController();
//# sourceMappingURL=index.js.map