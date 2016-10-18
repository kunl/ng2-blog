import * as dateformat from 'dateformat';

export default class {
    tagName: string;

    constructor(tag:{tagName: string}){
        this.tagName = tag.tagName;
    }

    save(){
        console.log('新建tag', this.tagName);
        return new Promise((resolve, reject) => {
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
    }

    static getPostByTag(tag) {

        let contentTags =`
            SELECT GROUP_CONCAT(distinct tagname) AS tags,title, content, createDate ,author, posts.id
            FROM tags
            LEFT JOIN posttag
            ON tags.tagid = posttag.tagid
            RIGHT JOIN posts
            ON posttag.postid = posts.id
            GROUP BY posts.id
            WHERE tagname = '${tag}'
            LIMIT 0,6
        `;
        console.log('tag', tag)
        return new Promise( (resolve, reject) => {
            pool.getConnection((err, connection) => {
                connection.query(contentTags, (err, result) => {
                    if(err){
                        reject(err);
                    }
                    console.log(result)

                    resolve(result.map((post) => {
                        post.createDate = dateformat(post.createDate, 'yyyy年mm月dd日 HH:MM:ss');
                        post.tags = post.tags ? post.tags.split(',') : [];
                        return post;
                    }));
                    connection.release();
                });
            })
            
        });
    }

    static getTags() {
        let sql = `
            SELECT tagName,tags.tagId
            FROM tags
            left JOIN postTag
            ON tags.tagId = postTag.tagId
            GROUP BY tags.tagId
        `;
        return new Promise( (resolve, reject) => {
            pool.getConnection((err, connection) => {
                connection.query(sql, (err, result) =>{
                if(err){
                        reject(err);
                    }
                    resolve(result);
                    connection.release();
                });
            });
        });
    }

    
}