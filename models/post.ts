// import pool from './db';
import * as dateformat from 'dateformat';
import * as mongoose from 'mongoose';
import { Schema, Types, Document } from 'mongoose';

import db from '../db';

export let ObjectId = mongoose.Schema.Types.ObjectId;

export interface IPost extends Document {
  name: string;
  power: string;
  amountPeopleSaved: number;
  content: string;
  createdAt: Date;
  modifiedAt: Date;
}

let _schema = new Schema({
  title: {
    type: String,
    required: true
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

export let Post = db.model<IPost>('posts', _schema);

// export class HeroModel {

//   private _heroModel: IPost;

//   static findHero(name: string): Promise<IPost> {
//     let p = new Promise((resolve, reject) => {
//       let repo = new HeroRepository();

//       repo.find({ name: name }).sort({ createdAt: -1 }).limit(1).exec((err, res) => {
//         if (err) {
//           reject(err);
//         }
//         else {
//           if (res.length) {
//             resolve(res[0]);
//           }
//           else {
//             resolve(null);
//           }
//         }
//       });
//     });

//     return p;
//   }

// }
