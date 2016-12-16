import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
    selector: 'List',
    templateUrl: 'list.component.html'
})
export  class ListComponent implements OnInit {
    title: string;
    content: string;

    constructor(private _service: PostService) {

    }

    ngOnInit(){
        this.submit();
    }

    submit(){
        this._service.save(3333);
        console.log(this)
    }
}