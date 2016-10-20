import { Router } from 'express';

import { Post } from '../models';

let _router = Router();


/* GET users listing. */
_router.get('/list', (req, res, next) => {

    console.log('### 查询 users ###')

    Post.find().exec().then(post => {
        console.log(post);
        res.render('post', {title: '列表', list: post})
    }, err => {
        console.log(err)
        res.status(500)
    });

});


_router.get('/post/:title', (req, res, next) => {
    res.render('post', {title: 'post list aaaaaa'})
});



_router.post('/post', (req, res, next) => {

    console.log('### 新建 post ###')
    console.log(req.body)

    Post.create(req.body).then(post => {
        console.log(post);
        res.redirect('/')
    }, err => {
        console.log(err)
        res.status(500)
        res.end()
    })

});


_router.put('/post', (req, res, next) => {
    
});


_router.delete('/post', (req, res, next) => {
    
});


export let post = _router;
