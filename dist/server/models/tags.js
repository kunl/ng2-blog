"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
let sql = {
    find_by_post: 'post_tag.postId, tag.tagId tagId, tag.name from post_tag left join tag on post_tag.tagId = tag.tagId WHERE post_tag.postId in ?;',
    find_one_post: 'SELECT id, title, content, intro, createdAt, viewTimes FROM post WHERE id = ?',
    update_view_times: 'UPDATE post SET viewTimes = (viewTimes + 1) WHERE id = ?'
};
class Tag {
    findByPostId(id) {
        return new Promise((resolve, reject) => {
            db_1.default.getConnection((err, connect) => {
                if (err)
                    console.log(err);
                connect.query(sql.find_one_post, [1, 2, 3], (err, rows) => {
                    if (err)
                        console.log(err);
                    console.log(rows);
                    resolve(rows);
                    connect.release();
                });
            });
        });
    }
}
exports.Tag = Tag;
//# sourceMappingURL=tags.js.map