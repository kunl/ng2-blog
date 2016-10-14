"use strict";
var db_1 = require("./db");
var dateformat = require("dateformat");
var PostModel = (function () {
    function PostModel(post) {
        this.title = '';
        this.content = '';
        this.author = '';
        this.createDate = new Date();
        this.updateDate = new Date();
        this.title = post.title;
        this.content = post.content;
        this.author = post.author;
    }
    return PostModel;
}());
exports.PostModel = PostModel;
var default_1 = (function () {
    function default_1(post) {
        this.post = null;
        this.post = new PostModel(post);
    }
    default_1.prototype.save = function () {
        var _this = this;
        console.log('插入文章', this.post.title);
        return new Promise(function (resolve, reject) {
            var post = _this.post;
            db_1["default"].getConnection(function (err, connection) {
                connection.query('INSERT INTO posts SET ?', post, function (err, result) {
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                    connection.release();
                });
            });
        });
    };
    default_1.getHomePost = function () {
        var colums = "\n            SELECT\n            title, content, updateDate, author, posts.tagId, tagName\n            FROM posts, tags where posts.tagId = tags.tagId LIMIT 0,6\n            ";
        var contentTags = "\n            SELECT GROUP_CONCAT(distinct tagname) AS tags,title, content, createDate ,author, posts.id\n            FROM tags\n            LEFT JOIN posttag\n            ON tags.tagid = posttag.tagid\n            RIGHT JOIN posts\n            ON posttag.postid = posts.id\n            GROUP BY posts.id\n            LIMIT 0,6\n        ";
        return new Promise(function (resolve, reject) {
            db_1["default"].getConnection(function (err, connection) {
                if (err) {
                    throw err;
                }
                connection.query(contentTags, function (err, result) {
                    if (err) {
                        reject(err);
                    }
                    resolve(result.map(function (post) {
                        post.createDate = dateformat(post.createDate, 'yyyy年mm月dd日 HH:MM:ss');
                        post.tags = post.tags ? post.tags.split(',') : [];
                        return post;
                    }));
                    connection.release();
                });
            });
        });
    };
    default_1.getPosts = function () {
        var colums = ['title', 'content', 'createDate', 'updateDate', 'author', 'tag'];
        return new Promise(function (resolve, reject) {
            db_1["default"].getConnection(function (err, connection) {
                connection.query('SELECT ?? FROM posts', [colums], function (err, result) {
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                    connection.release();
                });
            });
        });
    };
    default_1.getPostByTitle = function (title) {
        var sql = "\n            SELECT title, content, createDate, updateDate, author\n            FROM posts where title = '" + title + "'\n        ";
        console.log(title, 'db');
        return new Promise(function (resolve, reject) {
            db_1["default"].getConnection(function (err, connection) {
                connection.query(sql, function (err, post) {
                    if (err) {
                        reject(err);
                    }
                    resolve(post && post[0]);
                    connection.release();
                });
            });
        });
    };
    return default_1;
}());
exports.__esModule = true;
exports["default"] = default_1;
