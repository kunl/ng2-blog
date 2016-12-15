"use strict";
const express_1 = require("express");
const home_1 = require("./home");
const user_1 = require("./user");
const post_1 = require("./post");
const tag_1 = require("./tag");
// import login from './login';
const admin_1 = require("./admin");
let router = express_1.Router();
router.use(home_1.home);
router.use(user_1.user);
router.use(post_1.post);
router.use(tag_1.tag);
router.use(admin_1.admin);
Object.defineProperty(exports, "__esModule", { value: true });
// router.get('/:title', postDetail);
// router.get('/tag/:tagName', tag)
// router.use('/login', login);
exports.default = router;
//# sourceMappingURL=index.js.map