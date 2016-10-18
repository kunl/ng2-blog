import Tag from '../models/tags';
import * as express from 'express';

export default (req: express.Request, res:express.Response, next:express.NextFunction) => {
    let tag = req.params.tagName;

    Tag.getPostByTag(tag).then((posts: any) => {
        console.log(posts);
    })
};