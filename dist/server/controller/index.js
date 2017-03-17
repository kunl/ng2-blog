"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const marked = require("marked");
const moment = require("moment");
const models_1 = require("../models");
class PostController {
    constructor(postModel) {
        this.postModel = postModel;
    }
    findOne(id) {
        this.updateViewTimes(id);
        return new Promise((resolve, reject) => {
            this.postModel.getOne(id).then(data => {
                let post = data[0];
                post.content = marked(post.content);
                post.createdAt = moment(post.createdAt).format('YYYY-MM-DD');
                resolve(post);
            });
        });
    }
    find() {
        return new Promise((resolve, reject) => {
            this.postModel.getList().then(data => {
                let post_ids = [];
                data.forEach((post, index) => {
                    post.createdAt = moment(post.createdAt).format('YYYY-MM-DD');
                    post_ids.push(post.id);
                });
                resolve(data);
            });
        });
    }
    updateViewTimes(id) {
        return new Promise((resolve, reject) => {
            this.postModel.updateViewTimes(id).then(data => {
                resolve(data);
            });
        });
    }
}
exports.post = new PostController(new models_1.Post);
//# sourceMappingURL=index.js.map