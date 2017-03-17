"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
let sql = {
    find_all_post: 'SELECT id,title, intro, createdAt, viewTimes FROM POST',
    find_one_post: 'SELECT id, title, content, intro, createdAt, viewTimes FROM post WHERE id = ?',
    update_view_times: 'UPDATE post SET viewTimes = (viewTimes + 1) WHERE id = ?'
};
class Post {
    getList() {
        return new Promise((resolve, reject) => {
            db_1.default.getConnection((err, connect) => {
                if (err) {
                    console.log('err');
                }
                connect.query(sql.find_all_post, (err, rows) => {
                    if (err)
                        console.log(err);
                    console.log(rows.length);
                    resolve(rows);
                    connect.release();
                });
            });
        });
    }
    getOne(id) {
        return new Promise((resolve, reject) => {
            db_1.default.getConnection((err, connect) => {
                if (err) {
                    console.log('err');
                }
                connect.query(sql.find_one_post, id, (err, rows) => {
                    if (err)
                        console.log(err);
                    resolve(rows);
                    connect.release();
                });
            });
        });
    }
    updateViewTimes(id) {
        return new Promise((resolve, reject) => {
            db_1.default.getConnection((err, connect) => {
                if (err) {
                    console.log('err');
                }
                connect.query(sql.update_view_times, id, (err, rows, fields) => {
                    if (err)
                        console.log(err);
                    resolve();
                    connect.release();
                });
            });
        });
    }
}
exports.Post = Post;
//# sourceMappingURL=post.js.map