import { Router } from 'express';
import postList from './post_list'

let router = Router();

router.get('/', (req, res) => {
    let user = req.session.user;

    if(user && user.user){
        res.render('admin', {
            title: '后台',
            nickname: user.nickName
        });
    }else{
        res.redirect('/login');
    }
    
});


router.post('/post', (req, res) =>{
    
    let loginUser = req.body;

});


export default router;

