import * as marked from 'marked';
import * as moment from 'moment';
import { Post, IPost } from '../models';

class PostController {
    
    constructor(private postModel: Post) {}

    findOne(id) {
        this.updateViewTimes(id);

        return new Promise<IPost>((resolve, reject) => {
            this.postModel.getOne(id).then(data => {
                let post = data[0];
                    post.content = marked(post.content);
                    post.createdAt = moment(post.createdAt).format('YYYY-MM-DD')
                resolve(post)
            })
        })
    }


    find() {
        return new Promise<IPost[]>((resolve, reject) => {
            this.postModel.getList().then(data => {
                  let post_ids = [];

                data.forEach((post, index) => {
                    post.createdAt = moment(post.createdAt).format('YYYY-MM-DD')
                    post_ids.push(post.id)
                })
            
                resolve(data)
            })
        });
    }
    

    updateViewTimes(id) {
        return new Promise<IPost[]>((resolve, reject) => {
            this.postModel.updateViewTimes(id).then(data => {
                resolve(data)
            })
        });
    }


}

export let post = new PostController(new Post);