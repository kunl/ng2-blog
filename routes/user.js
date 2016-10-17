"use strict";
var express_1 = require("express");
var router = express_1.Router();
var models_1 = require("../models");
/* GET users listing. */
router.get('/', function (req, res, next) {
    // User.create({
    //     id: '222',
    //     age: 25,
    //     created: new Date,
    //     name: 'teetet'
    // }).then((e) => {
    //      res.send('respond with a resource user');
    // })
    console.log('### 查询 users ###');
    models_1.User.findById('222').then(function (user) {
        console.log(user);
        res.send('ok');
    });
    //   user.save((err)=> {
    //     if(err){
    //       console.log(err)
    //     }
    //     res.send('respond with a resource user');
    //   })
});
exports.user = router;
