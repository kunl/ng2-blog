import Post from '../models/post';

export default (req, res) => {
    let title = req.params.title;
    Post.getPostByTitle(title).then((post) =>{
        if(post){
            res.render('post', {
                title: post.title,
                post: post
            })
        }else{
            res.status(404).render('404', {
                title: 404
            })
        }
        
    })
};