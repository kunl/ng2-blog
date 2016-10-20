import * as mongoose from 'mongoose';
import { Schema, Types, Document, Model } from 'mongoose';

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
  author: {
    type: String
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

export interface PostModel extends Model<IPost>{

}

export let Post = db.model<IPost>('posts', _schema);