import { Router } from 'express';
import * as marked from 'marked';
import * as hljs from 'highlight.js';
import { Post, IPost } from '../models';


marked.setOptions({
    highlight: (code, lang) => {
        return hljs.highlight(lang, code).value
    }
})

let _router = Router();


/* GET users listing. */
_router.get('/posts', (req, res, next) => {

    console.log('### 查询 users ###')

    Post.find().exec().then(post => {
        console.log('查询到文章共', post.length, '条');
        post.forEach(p => {
            p.content = marked(p.content);
        })
        res.json({
            data: post
        })
    }, err => {
        console.log(err)
        res.status(500)
    });

});


_router.get('/posts/:title', (req, res, next) => {
    let title = req.params;
    console.log(title)
    Post.findOne(title).exec().then(post => { 
        console.log('查找到', post._id);
        post.content = marked(post.content);
        res.json({data: post})
    })
});



_router.post('/posts', (req, res, next) => {

    console.log('### 新建 post ###');
    console.log(req.body)

    Post.create(req.body).then((post) => {
        console.log(post['_id']);
        res.json(post)
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
