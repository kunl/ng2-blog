import config from '../config';
import mysql from 'mysql';

let connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.passwd,
    database: config.db
});

connection.connect();

export default function(){}