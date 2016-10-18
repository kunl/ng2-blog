import { Document, Schema } from 'mongoose';
import * as mongoose from 'mongoose';


export interface IUser extends Document{
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

let User = mongoose.model<IUser>('Users', _schema);
