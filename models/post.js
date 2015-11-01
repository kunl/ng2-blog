import db from './db';

export default class {
    constructor(post){
        this.title = post.title;
        this.content = post.content;
        this.author = post.author;
        this.createDate= new Date()
    }

    save(cb){

        let post = {
            title: this.title,
            content: this.content,
            author: this.autor,
            createDate: this.createDate,
            updateDate: new Date()
        }

        db.query('INSERT INTO post SET ?', post, (err, result) => {
            console.log(result)
            db.end();
        });
    }

    static getTen() {

        let colums = ['title', 'content', 'updateDate'];

        return new Promise( (resolve, reject) => {
            db.query('SELECT ?? FROM post', [colums], (err, result) => {
                if(err){
                    reject(err);
                }
                resolve(result);
                db.end();
            });
        });
    }

    static getPosts() {
        let colums = ['title', 'content', 'createDate', 'author', 'tag'];
        return new Promise( (resolve, reject) => {
            db.query('SELECT ?? FROM post', [colums], (err, result) =>{
                if(err){
                    reject(err);
                }
                resolve(result);
                db.end();
            });
        });
    }

    static getPostByTitle(title) {

        let colums = ['title', 'content', 'createDate', 'updateDate', 'author'];
console.log(title)
        return new Promise((resolve, reject) => {
            db.query('SELECT ?? FROM post where title = ?', [colums, title], (err, post) => {
                if(err){
                    reject(err);
                }
                console.log(post)
                resolve(post[0]);
                db.end();
            });
        });
    }
}