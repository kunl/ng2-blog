import pool from './db';
import dateformat from 'dateformat';

export default class {
    constructor(post){
        this.title = post.title;
        this.content = post.content;
        this.author = post.author;
        this.createDate= new Date()
    }

    save(){

        let post = {
            title: this.title,
            content: this.content,
            author: this.autor,
            createDate: this.createDate,
            updateDate: new Date()
        }
        console.log('插入文章', this.title);
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) =>{
                connection.query('INSERT INTO posts SET ?', post, (err, result) => {
                    if(err){
                        reject(err);
                    }
                    resolve(result);
                    connection.release();
            });
        })
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