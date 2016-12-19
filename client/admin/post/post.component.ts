import { Component } from '@angular/core';
import { PostService } from './post.service';

@Component({
    selector: 'Post',
    templateUrl: 'post.component.html'
})
export  class PostComponent {
    title: string;
    content: string;

    constructor(private _service: PostService){

    }

    submit(){

        let post = {
            title: this.title,
            content: this.content
        };

        console.log( post);

        this._service.save(post)
    }
}