import { Router } from 'express';
import User from '../models/user';

let router = Router();

router.get('/', (req, res) => {
    res.render('login', {
        title: '登陆'
    });
});


router.post('/', (req, res) => {
    console.log('登录用户为:', req.body);
    
    let loginUser = req.body;

    User.get(loginUser.user).then((user) => {
        console.log(user)
        if(loginUser.user == user.user && loginUser.passwd == user.passwd){
            req.session.user = user;
            console.log(user.user, '登录成功');
            res.redirect('/admin');
        }else{
            res.send('行行好，再想想密码吧！');
        }
    });
    

});


export default router;