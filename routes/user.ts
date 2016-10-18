import { Router } from 'express';
let router = Router();

import { User, IUser } from '../models';

/* GET users listing. */
router.get('/user', (req, res, next) => {

    // User.create(<IUser>{
    //     id: '231452',
    //     name: 'ssgsgdgdgd名字',
    //     age: 30
    // })
    
    User.findTop()
    
    console.log('### 查询 users ###')
    User.findOne().then((user:IUser) => {
        console.log(user);

        // res.send('ok')
        res.render('index', {title: user.name})
    }, (err:any) => {
        console.log(err)
        res.status(500)
    });


});


export let user = router;
