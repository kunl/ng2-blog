import { Router } from 'express';

import { User } from '../models';

let _router = Router();


/* GET users listing. */
_router.get('/list', (req, res, next) => {

    console.log('### 查询 users ###')
    User.findById('222').then(user => {
        console.log(user);
        // res.send('ok')
        res.render('index', {title: user.name})
    }, err => {
        console.log(err)
        res.status(500)
    });


});

_router.get('/post', (req, res, next) => {
    res.render('post', {title: 'post list aaa'})
});

_router.post('/post', (req, res, next) => {

    console.log('### 新建 post ###')
    console.log(req.body)

    res.send(req.body)
});

_router.put('/post', (req, res, next) => {
    
})

_router.delete('/post', (req, res, next) => {
    
})



// _router.get


export let post_router = _router;
