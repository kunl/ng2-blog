import config from '../config';
import mysql from 'mysql';

export default mysql.createPool({
    host: config.host,
    user: config.user,
    password: config.passwd,
    database: config.db
});
