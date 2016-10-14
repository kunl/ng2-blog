import pool from './db';

export default class {
    static get(user){
        return new Promise((resolve, reject) => {
            pool.createConnection((err, connection) => {
                connection.query('SELECT ?? FROM user where user = ?', [['user', 'passwd', 'nickName'], user], (err, result) => {
                    if(err){
                        reject(err);
                    }
                    resolve(result[0]);
                })
            })
            
        });
    }
}
