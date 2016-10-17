import { Router } from 'express';
let router = Router();

import { User } from '../models';

/* GET users listing. */
router.get('/', (req, res, next) => {

    // User.create({
    //     id: '222',
    //     age: 25,
    //     created: new Date,
    //     name: 'teetet'
    // }).then((e) => {
    //      res.send('respond with a resource user');
    // })

    console.log('### 查询 users ###')
    User.findById('222').then(user => {
        console.log(user);
        res.send('ok')
    })

//   user.save((err)=> {
//     if(err){
//       console.log(err)
//     }

//     res.send('respond with a resource user');
//   })
 });


export let user = router;
