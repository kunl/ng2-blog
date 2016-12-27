import * as mongoose from 'mongoose';
import { Schema, Document, Model } from 'mongoose';

export let ObjectId = mongoose.Schema.Types.ObjectId;

export interface IPost extends Document {
  title: string;
  content: string;
  tags: string[]
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
  tags: [
    {
      type: ObjectId,
      ref: 'tags'
    }
  ],
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
})

export interface PostModel extends Model<IPost>{

}

export let Post = mongoose.model<IPost>('posts', _schema);