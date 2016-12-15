"use strict";
const express_1 = require("express");
let _router = express_1.Router();
/* GET home page. */
_router.get('/index', (req, res, next) => {
    res.redirect('/');
});
// _router.get('/', (req, res, next) => {
//     post.find().then(list => {
//         console.log(`渲染列表 共 ${list.length}条`);
//         res.render('index', { title: '列表', list: list })
//     }, err => {
//         console.log(err);
//         res.status(500)
//     });
// });
exports.home = _router;
//# sourceMappingURL=home.js.map