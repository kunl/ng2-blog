import { Document, Schema, Model } from 'mongoose';
import * as mongoose from 'mongoose';


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
_schema.methods.findTop = function(){
    console.log(333)
}

_schema.statics.findTop = () => {
    console.log('find all')
}

interface UserModel extends Model<IUser> {
    findTop(): Promise<IUser []>
}

export let User = <UserModel>mongoose.model<IUser>('Users', _schema);
