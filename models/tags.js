"use strict";
var dateformat = require('dateformat');
var default_1 = (function () {
    function default_1(tag) {
        this.tagName = tag.tagName;
    }
    default_1.prototype.save = function () {
        console.log('新建tag', this.tagName);
        return new Promise(function (resolve, reject) {
            // pool.getConnection((err, connection) =>{
            //     connection.query('INSERT INTO tags SET ?', tag, (err, result) => {
            //         if(err){
            //             reject(err);
            //         }
            //         resolve(result);
            //         connection.release();
            //     });
            // })
        });
    };
    default_1.getPostByTag = function (tag) {
        var contentTags = "\n            SELECT GROUP_CONCAT(distinct tagname) AS tags,title, content, createDate ,author, posts.id\n            FROM tags\n            LEFT JOIN posttag\n            ON tags.tagid = posttag.tagid\n            RIGHT JOIN posts\n            ON posttag.postid = posts.id\n            GROUP BY posts.id\n            WHERE tagname = '" + tag + "'\n            LIMIT 0,6\n        ";
        console.log('tag', tag);
        return new Promise(function (resolve, reject) {
            pool.getConnection(function (err, connection) {
                connection.query(contentTags, function (err, result) {
                    if (err) {
                        reject(err);
                    }
                    console.log(result);
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
    default_1.getTags = function () {
        var sql = "\n            SELECT tagName,tags.tagId\n            FROM tags\n            left JOIN postTag\n            ON tags.tagId = postTag.tagId\n            GROUP BY tags.tagId\n        ";
        return new Promise(function (resolve, reject) {
            pool.getConnection(function (err, connection) {
                connection.query(sql, function (err, result) {
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                    connection.release();
                });
            });
        });
    };
    return default_1;
}());
exports.__esModule = true;
exports["default"] = default_1;
