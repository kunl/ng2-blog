import Post from '../models/post';
import * as express from 'express';

export default (req: express.Request, res: express.Response) => {

    let post = new Post({
        title: 'post.title',
        content: 'post.content',
        author: 'post.author'
    });

    Post.getHomePost().then((result: any) => {
        res.render('home', {
            title: '主页',
            posts: result,
            desc: 'kunl 的前端博客'
        })

        

    })

};
