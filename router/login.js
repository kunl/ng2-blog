import { Router } from 'express';

let router = Router();

router.get('/', function(req, res){
    res.render('login', {
        title: '登陆'
    });
});

let user = {
    name: 'test',
    passwd: 'test'
};

router.post('/', function(req, res){
    console.log('登录用户为:', req.body);
   
    if(req.body.name == user.name && req.body.passwd == user.passwd){
        req.session.user = user;
        console.log(user.name, '登录成功');
        res.redirect('/');
    }

});


export default router;