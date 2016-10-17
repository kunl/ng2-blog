"use strict";
var express_1 = require("express");
var home_1 = require("./home");
var user_1 = require("./user");
var router = express_1.Router();
router.use('/', home_1.home);
router.use('/user', user_1.user);
exports.__esModule = true;
// router.get('/:title', postDetail);
// router.get('/tag/:tagName', tag)
// router.use('/admin', admin);
// router.use('/login', login);
exports["default"] = router;
