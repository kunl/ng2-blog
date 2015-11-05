import Tag from '../models/tags';


export default (req, res, next) => {
    let tag = req.params.tagName;

    Tag.getPostByTag(tag).then((posts) => {
        console.log(posts);
    })
};