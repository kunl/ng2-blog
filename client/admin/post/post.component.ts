import { Component } from '@angular/core';
import tpl from './post.tpl';

@Component({
    selector: 'Post',
    template: tpl
})
export  class PostComponent {
    title: string;
    content: string;

    submit(){
        console.log(this)
    }
}