import { Router } from 'express';
import postList from './post_list';
import Post from '../../models/post';

let router = Router();

router.get('/', (req, res) => {
    let user = req.session['user'];

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
    
    if(req.body.title && req.body.content) {
        let post = new Post(req.body);

        // post.save().then((result) => {
        //     console.log(result, '结果')
        //         res.status(200).redirect('/admin');
        //     if(!result.message){
        //     }
        // });
    }
    console.log(req.body)

});


export default router;

