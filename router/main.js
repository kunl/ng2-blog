var express = require('express');
var router = express.Router();

import index = from './index';
import login from './login';

console.log(333)
console.log(login)
router.use('/', index);
router.use('/login', login);

module.exports = router;