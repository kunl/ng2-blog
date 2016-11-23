import * as marked from 'marked';
import { Post, PostModel, IPost } from '../models';

class PostController {
    _post: PostModel;

    constructor() {
        this._post = Post;
    }

    find() {

        return new Promise <IPost[]>((resolve, reject) => {
            this._post
                .find()
                .populate('tags')
                .sort({ createdAt: -1 })
                .limit(10)
                .exec((err, res) => {
                    console.log('查找列表 成功 ！！！');
                    if (err) {
                        reject(err);
                    }
                    else {
                        if (res.length) {
                            res.forEach((post) => {
                                post.content = marked(post.content)
                            });
                            resolve(res);
                        }
                        else {
                            resolve(null);
                        }
                    }
            });
        });
    }

    new(post: any) {
        return new Promise <IPost[]>((resolve, reject) => {
            this._post.create(post).then((p :any) => {
                resolve(p)
            }, err => {
                reject(err);
            })
        });
    }

}

export let post = new PostController();