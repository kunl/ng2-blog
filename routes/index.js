"use strict";
var express_1 = require("express");
var home_1 = require("./home");
var user_1 = require("./user");
var post_1 = require("./post");
var tag_1 = require("./tag");
// import login from './login';
var admin_1 = require("./admin");
var router = express_1.Router();
router.use(home_1.home);
router.use(user_1.user);
router.use(post_1.post);
router.use(tag_1.tag);
router.use(admin_1.admin);
exports.__esModule = true;
// router.get('/:title', postDetail);
// router.get('/tag/:tagName', tag)
// router.use('/login', login);
exports["default"] = router;
