import config from '../config';
import * as mysql from 'mysql';

export default mysql.createPool({
    host: config.host,
    user: config.user,
    password: config.passwd,
    database: config.db
});
