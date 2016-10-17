// import pool from './db';
import * as dateformat from 'dateformat';
import {Post} from  '../typings'



import * as mongoose from 'mongoose';

export let Schema = mongoose.Schema;
export let ObjectId = mongoose.Schema.Types.ObjectId;
export let Mixed = mongoose.Schema.Types.Mixed;

export interface IPostModel extends mongoose.Document {
  name: string;
  power: string;
  amountPeopleSaved: number;
  createdAt: Date;
  modifiedAt: Date;
}

let schema = new Schema({
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
  createdAt: {
	   type: Date,
	   required: false
  },
  modifiedAt: {
	   type: Date,
	   required: false
  }
}).pre('save', function(next) {
  if (this._doc) {
    let doc = <IPostModel>this._doc;
    let now = new Date();
    if (!doc.createdAt) {
      doc.createdAt = now;
    }
    doc.modifiedAt = now;
  }
  next();
  return this;
});

export let HeroSchema = mongoose.model<IPostModel>('hero', schema, 'heroes', true);

export class HeroModel {

  private _heroModel: IPostModel;

  constructor(heroModel: IPostModel) {
    this._heroModel = heroModel;
  }
  get name(): string {
    return this._heroModel.name;
  }

  get power(): string {
    return this._heroModel.power;
  }

  get amountPeopleSaved(): number {
    return this._heroModel.amountPeopleSaved;
  }
  
  static createHero(name: string, power: string) : Promise<IPostModel> {
    let p = new Promise((resolve, reject) => {
      
      let repo = new HeroRepository();

      let hero = <IPostModel>{
          name: name,
          power: power,
          amountPeopleSaved: 0
      };

      repo.create(hero, (err, res) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(res);
        }
      });    
      
    });
    
    return p;
    
  }
  
  static findHero(name: string) : Promise<IPostModel> {
    let p = new Promise((resolve, reject) => {
      let repo = new HeroRepository();

      repo.find({ name : name }).sort({ createdAt: -1 }).limit(1).exec((err, res) => {
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

Object.seal(HeroModel);

export interface IRead<T> {
  retrieve: (callback: (error: any, result: any) => void) => void;
  findById: (id: string, callback: (error: any, result: T) => void) => void;
  findOne(cond?: Object, callback?: (err: any, res: T) => void): mongoose.Query<T>;
  find(cond: Object, fields: Object, options: Object, callback?: (err: any, res: T[]) => void): mongoose.Query<T[]>;
}

export interface IWrite<T> {
  create: (item: T, callback: (error: any, result: any) => void) => void;
  update: (_id: mongoose.Types.ObjectId, item: T, callback: (error: any, result: any) => void) => void;
  delete: (_id: string, callback: (error: any, result: any) => void) => void;
}

export class RepositoryBase<T extends mongoose.Document> implements IRead<T>, IWrite<T> {

  private _model: mongoose.Model<mongoose.Document>;

  constructor(schemaModel: mongoose.Model<mongoose.Document>) {
    this._model = schemaModel;
  }

  create(item: T, callback: (error: any, result: T) => void) {
    this._model.create(item, callback);
  }

  retrieve(callback: (error: any, result: T) => void) {
    this._model.find({}, callback);
  }

  update(_id: mongoose.Types.ObjectId, item: T, callback: (error: any, result: any) => void) {
    this._model.update({ _id: _id }, item, callback);
  }

  delete(_id: string, callback: (error: any, result: any) => void) {
    this._model.remove({ _id: this.toObjectId(_id) }, (err) => callback(err, null));
  }

  findById(_id: string, callback: (error: any, result: T) => void) {
    this._model.findById(_id, callback);
  }

  findOne(cond?: Object, callback?: (err: any, res: T) => void): mongoose.Query<T> {
    return this._model.findOne(cond, callback);
  }

  find(cond?: Object, fields?: Object, options?: Object, callback?: (err: any, res: T[]) => void): mongoose.Query<T[]> {
    return this._model.find(cond, options, callback);
  }

  private toObjectId(_id: string): mongoose.Types.ObjectId {
    return mongoose.Types.ObjectId.createFromHexString(_id);
  }

}

export class HeroRepository extends RepositoryBase<IPostModel> {
  constructor() {
    super(HeroSchema);
  }
}

Object.seal(HeroRepository);

let uri = 'mongodb://localhost/heroes';
mongoose.connect(uri, (err) => {
  if (err) {
    console.log(err.message);
    console.log(err);
  }
  else {
    console.log('Connected to MongoDb');
  }
});

HeroModel.createHero('Steve', 'Flying').then((res) => {
  console.log('### Created Hero ###');
  console.log(res);

  HeroModel.findHero('Steve').then((res) => {
    console.log('### Found Hero ###');
    console.log(res);
    
    // now update the Hero
    let hero = <IPostModel>res;
    hero.power = 'Invisibility';
    hero.save((err, res) => {
      if (err) {
        console.log(err.message);
        console.log(err);
      }
      else {
        console.log(res);
      }
    });
  }, (err) => {
    if (err) {
      console.log(err.message);
    }
  });
}, (err) => {
  if (err) {
    console.log(err.message);
    console.log(err);
  }
});

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