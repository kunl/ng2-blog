// import pool from './db';
import * as dateformat from 'dateformat';
import * as mongoose from 'mongoose';
import { Schema, Types, Document } from 'mongoose';

import db from '../db';

export let ObjectId = mongoose.Schema.Types.ObjectId;
export let Mixed = mongoose.Schema.Types.Mixed;

export interface IPost extends Document {
  name: string;
  power: string;
  amountPeopleSaved: number;
  content: string;
  createdAt: Date;
  modifiedAt: Date;
}

let _schema = new Schema({
  name: {
    type: String,
    required: true
  },
  power: {
    type: String,
    required: true
  },
  amountPeopleSaved: {
    type: Number,
    required: false
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: false
  },
  modifiedAt: {
    type: Date,
    required: false
  }
}).pre('save', function (next) {
  let now = new Date();
  this.createdAt = this.createdAt || now;
  this.modifiedAt = now;
  next();
});

export let Post = mongoose.model<IPost>('Posts', _schema);

export class HeroModel {

  private _heroModel: IPost;

  static findHero(name: string): Promise<IPost> {
    let p = new Promise((resolve, reject) => {
      let repo = new HeroRepository();

      repo.find({ name: name }).sort({ createdAt: -1 }).limit(1).exec((err, res) => {
        if (err) {
          reject(err);
        }
        else {
          if (res.length) {
            resolve(res[0]);
          }
          else {
            resolve(null);
          }
        }
      });
    });

    return p;
  }

}


export interface IRead<T> {
  retrieve: (callback: (error: any, result: any) => void) => void;
  findById: (id: string, callback: (error: any, result: T) => void) => void;
  findOne(cond?: Object, callback?: (err: any, res: T) => void): mongoose.Query<T>;
  find(cond: Object, fields: Object, options: Object, callback?: (err: any, res: T[]) => void): mongoose.Query<T[]>;
}



export class PostModel  {
  title = ''
  content = ''
  author = ''
  createDate = new Date()
  updateDate = new Date()

 
}

export default class {
  post: Post = null

  constructor(post: Post) {
    this.post = new PostModel(post);
  }

  save() {

    console.log('插入文章', this.post.title);
    return new Promise((resolve, reject) => {
      let post = this.post
      pool.getConnection((err, connection) => {
        connection.query('INSERT INTO posts SET ?', post, (err, result) => {
          if (err) {
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

    let contentTags = `
            SELECT GROUP_CONCAT(distinct tagname) AS tags,title, content, createDate ,author, posts.id
            FROM tags
            LEFT JOIN posttag
            ON tags.tagid = posttag.tagid
            RIGHT JOIN posts
            ON posttag.postid = posts.id
            GROUP BY posts.id
            LIMIT 0,6
        `;
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          throw err;
        }
        connection.query(contentTags, (err, result) => {
          if (err) {
            reject(err);
          }

          resolve(result.map((post: Post) => {
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
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        connection.query('SELECT ?? FROM posts', [colums], (err, result) => {
          if (err) {
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
          if (err) {
            reject(err);
          }
          resolve(post && post[0]);
          connection.release();
        });
      });

    });
  }
}