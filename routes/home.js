"use strict";
var express_1 = require("express");
var router = express_1.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    // Post.getHomePost().then((result: any) => {
    //     res.render('home', {
    //         title: '主页',
    //         posts: result,
    //         desc: 'kunl 的前端博客'
    //     })
    // })
    res.render('index', { title: 'Express' });
});
exports.home = router;
