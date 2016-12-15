import * as mongoose from 'mongoose';
import { Schema, Model, Document } from 'mongoose';

interface ITags extends Document {
}

let _schema = new Schema({
    tagName: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date
    }
}).pre('save', (next) => {
    console.log('创建 tags');

    let now = new Date();
    this.createdAt = this.createdAt || now;
    next();

}).post('save', () => {
    console.log('保存成功了');
});

export let Tag = mongoose.model<ITags>('tags', _schema);