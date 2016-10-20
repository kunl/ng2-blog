import * as marked from 'marked';
import { Router } from 'express';
let _router = Router();

import { post }  from '../controller';


/* GET home page. */
_router.get('/index', (req, res, next) => {
    res.redirect('/')
});

_router.get('/', function (req, res, next) {

    post.find().then(list => {
        console.log(`渲染列表 共 ${list.length}条`);
        res.render('index', { title: '列表', list: list })
    }, err => {
        console.log(err)
        res.status(500)
    });

});


export let home = _router;
