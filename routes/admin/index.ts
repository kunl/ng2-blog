import { Router } from 'express';
let _router = Router();

import {post}  from '../../controller';

/* GET admin page. */
_router.get('/admin', (req, res) => {
    // let user = req.session['user'];

        res.render('admin/index', {
            title: '后台',
            nickname: 'user.nickName'
        });

    // if(user && user.user){
    //     res.render('admin', {
    //         title: '后台',
    //         nickname: user.nickName
    //     });
    // }else{
    //     res.redirect('/login');
    // }
    
});

export let admin = _router;

