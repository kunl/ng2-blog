import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
@Component({
    templateUrl: 'detail.component.html'
})

export class DetailComponent implements OnInit{

    id: string;

    constructor(
        private _route: ActivatedRoute,
        private _service: PostService
    ){

        console.log(this)
    }

    ngOnInit(){
        this._route.params
            .map(params => params.id)
            .subscribe((id) => {
                console.log(id);
                this.id = id;

                this.getDetail(id);
            });

    }

    getDetail(id){
        this._service.getById(id).subscribe(post => {
            console.log(post)
            this.post = post;
        })
    }


}