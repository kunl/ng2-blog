var express = require('express');
var router = express.Router();

var index = require('./home');
var login = require('./login');


router.get('/', index);
router.use('/login', login);

module.exports = router;