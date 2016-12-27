import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import {Observable} from 'rxjs/rx';

@Component({
    templateUrl: 'detail.component.html'
})

export class DetailComponent implements OnInit{
  
    constructor(
        private _route: ActivatedRoute,
        private _service: PostService
    ){

        console.log(this)
    }

    post:{title: string, content: string};
    ngOnInit(){
        this._route.params
            .map((params: {id: string}) => params.id)
            .subscribe((id) => {
                console.log(id);

                this.getDetail(id);
            });

    }

    getDetail(id){
        this._service.getById(id).subscribe(post => {
             this.post = post
        });
    }


}