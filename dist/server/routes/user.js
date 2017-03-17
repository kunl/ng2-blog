"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let router = express_1.Router();
const models_1 = require("../models");
/* GET users listing. */
router.get('/user', (req, res, next) => {
    // User.create(<IUser>{
    //     id: '231452',
    //     name: 'ssgsgdgdgd名字',
    //     age: 30
    // })
    models_1.User.findOne().exec((err, user) => {
        console.log(err);
        console.log(user);
    });
    console.log('### 查询 users ###');
    models_1.User.findOne().then((user) => {
        console.log(user);
        // res.send('ok')
        res.render('index', { title: user.name });
    }, (err) => {
        console.log(err);
        res.status(500);
    });
});
exports.user = router;
//# sourceMappingURL=user.js.map