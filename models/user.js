import db from './db';

export default class {
    static get(user){
        return new Promise((resolve, reject) => {
            db.query('SELECT ?? FROM user where user = ?', [['user', 'passwd', 'nickName'], user], (err, result) => {
                if(err){
                    reject(err);
                }
                resolve(result[0]);
            })
        });
    }
}
