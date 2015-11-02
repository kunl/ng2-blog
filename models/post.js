import pool from './db';

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
                connection.query('INSERT INTO post SET ?', post, (err, result) => {
                    if(err){
                        reject(err);
                    }
                    resolve(result);
                    connection.release();
            });
        })
        });
        
        
    }

    static getTen() {

        let colums = ['title', 'content', 'updateDate', 'author'];

        return new Promise( (resolve, reject) => {
            pool.getConnection((err, connection) => {
                connection.query('SELECT ?? FROM post LIMIT 0,10', [colums], (err, result) => {
                    if(err){
                        reject(err);
                    }
                    resolve(result);
                    connection.release();
                });
            })
            
        });
    }

    static getPosts() {
        let colums = ['title', 'content', 'createDate', 'author', 'tag'];
        return new Promise( (resolve, reject) => {
            pool.getConnection((err, connection) => {
                connection.query('SELECT ?? FROM post', [colums], (err, result) =>{
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

        let colums = ['title', 'content', 'createDate', 'updateDate', 'author'];
console.log(title)
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                connection.query('SELECT ?? FROM post where title = ?', [colums, title], (err, post) => {
                    if(err){
                        reject(err);
                    }
                    console.log(post)
                    resolve(post && post[0] );
                    connection.release();
                });
            });
            
        });
    }
}