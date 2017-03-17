import * as mysql from 'mysql';
import { db } from './config'

let pool = mysql.createPool(Object.assign({}, db)) 

export default pool
