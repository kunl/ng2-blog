import { Document, Schema } from 'mongoose';
import db from '../db';


export interface IUser extends Document{
    id: string;
    created: Date;
    updated?: Date;
    name: string;
    age: number
}
export type  IUserModel = IUser & Document

let _schema:Schema = new Schema({
    id: String,
    created: Date,
    updated: Date,
    name: String,
    age: Number
})
.pre('save', (next) => {
    this.updated = new Date;
    next();
})

let _model = db.model<IUser>('Users', _schema);

export class User {
    
    static findById(id: string): Promise <IUserModel>{
        return new Promise <IUser>((resolve, reject) => {
            _model.findById(id).exec().then(u => u)
        })
    }
    static create(user:any) {
        return new Promise <IUserModel> ((resolve, reject) => {
            _model.create(user).then(u => u);
        })
    }


    
}


// export default class {
//     static get(user){
//         return new Promise((resolve, reject) => {
//             pool.createConnection((err, connection) => {
//                 connection.query('SELECT ?? FROM user where user = ?', [['user', 'passwd', 'nickName'], user], (err, result) => {
//                     if(err){
//                         reject(err);
//                     }
//                     resolve(result[0]);
//                 })
//             })
            
//         });
//     }
// }
