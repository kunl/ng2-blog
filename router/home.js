import Post from '../models/post';
import dateformat from 'dateformat';

export default (req, res) => {

    let post = new Post({
        title: 'post.title',
        content: 'post.content',
        author: 'post.author'
    });

    Post.getTen().then((result) => {

        result.forEach(function(post){
            post.updateDate = dateformat(post.updateDate, 'yyyy年mm月dd日 HH:MM:ss');
        })
        res.render('home', {
            title: '主页',
            posts: result
        })

    })

};
