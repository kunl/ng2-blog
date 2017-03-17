import { Router, Request } from 'express';
let _router = Router();

import { post } from '../controller';

import * as marked from 'marked';


_router.get('/', (req, res, next) => {
    console.log('home...')

    post.find().then(list => {
        console.log(`渲染列表 共 ${list.length}条`);
        res.render('index', { title: '列表', list: list })
    }, err => {
        console.log(err);
    });

});

_router.get('/post/:id', (req, res, next) => {
    console.log('detail...')
    
    post.findOne(req.params.id).then(data => {
        res.render('post', { title: data.title, post: data })
    }, err => {
        console.log(err);
    })
});

_router.get('/about', (req, res) => {
    res.render('about', {title: '关于'});
})


_router.get('/admin', (req, res) => {
    res.render('admin', { title: 'kunl 管理' })
})


export let home = _router;
