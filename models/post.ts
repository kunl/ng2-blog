import pool from './db';
import * as dateformat from 'dateformat';
import {Post} from  '../typings'

export class PostModel implements Post {
    title = ''
    content = ''
    author = ''
    createDate = new Date()
    updateDate = new Date()

    constructor(post: Post){
        this.title = post.title
        this.content = post.content
        this.author = post.author
    }
}

export default class {
    post:Post = null

    constructor(post: Post){
        this.post = new PostModel(post);
    }

    save(){

        console.log('插入文章', this.post.title);
        return new Promise((resolve, reject) => {
            let post = this.post
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

    static getHomePost() {

        let colums = `
            SELECT
            title, content, updateDate, author, posts.tagId, tagName
            FROM posts, tags where posts.tagId = tags.tagId LIMIT 0,6
            `;

        let contentTags =`
            SELECT GROUP_CONCAT(distinct tagname) AS tags,title, content, createDate ,author, posts.id
            FROM tags
            LEFT JOIN posttag
            ON tags.tagid = posttag.tagid
            RIGHT JOIN posts
            ON posttag.postid = posts.id
            GROUP BY posts.id
            LIMIT 0,6
        `;
        return new Promise( (resolve, reject) => {
            pool.getConnection((err, connection) => {
                if(err){
                    throw err;
                }
                connection.query(contentTags, (err, result) => {
                    if(err){
                        reject(err);
                    }

                    resolve(result.map((post:Post) => {
                        post.createDate = dateformat(post.createDate, 'yyyy年mm月dd日 HH:MM:ss');
                        post.tags = post.tags ? post.tags.split(',') : [];
                        return post;
                    }));
                    connection.release();
                });
            })
            
        });
    }

    static getPosts() {
        let colums = ['title', 'content', 'createDate', 'updateDate', 'author', 'tag'];
        return new Promise( (resolve, reject) => {
            pool.getConnection((err, connection) => {
                connection.query('SELECT ?? FROM posts', [colums], (err, result) =>{
                    if(err){
                        reject(err);
                    }
                    resolve(result);
                    connection.release();
                });
            });
        });
    }

    static getPostByTitle(title) {

        let sql = `
            SELECT title, content, createDate, updateDate, author
            FROM posts where title = '${title}'
        `;
        console.log(title, 'db');

        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                connection.query(sql, (err, post) => {
                    if(err){
                        reject(err);
                    }
                    resolve(post && post[0] );
                    connection.release();
                });
            });
            
        });
    }
}