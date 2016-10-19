"use strict";
var express_1 = require('express');
var router = express_1.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('home', { title: 'Express', post: [
            { title: 4 },
            { title: 2 }
        ] });
});
exports.home = router;
