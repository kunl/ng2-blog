import Post from '../models/post';

export default (req, res, next) => {
    let title = req.params.title;
    console.log(req.params)
    Post.getPostByTitle(title).then((post) =>{
        if(post){
            res.render('post', {
                title: post.title,
                post: post
            })
        }else{
            next()
        }
        
    })
};