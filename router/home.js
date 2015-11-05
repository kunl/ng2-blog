import Post from '../models/post';


export default (req, res) => {

    let post = new Post({
        title: 'post.title',
        content: 'post.content',
        author: 'post.author'
    });

    Post.getHomePost().then((result) => {
        res.render('home', {
            title: '主页',
            posts: result,
            desc: 'kunl 的前端博客'
        })

    })

};
