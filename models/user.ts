import { Document, Schema, Model } from 'mongoose';
import * as mongoose from 'mongoose';

import db from '../db';

export interface IUser extends Document {
    id: string;
    created: Date;
    updated?: Date;
    name: string;
    age: number
}

let _schema = new Schema({
    id: String,
    created: Date,
    updated: Date,
    name: String,
    age: Number
})
.pre('save', (next) => {
    console.log(this)
    this.updated = new Date;
    next();
})


/**
 * 实例上的方法
 * let user = new User();
 * user.findTop();
 */

_schema.statics.findTop = () => {
    console.log('find all')
}

interface UserModel extends Model<IUser> {
    findTop(): Promise<IUser []>
}

export let User = <UserModel>db.model<IUser>('Users', _schema);
