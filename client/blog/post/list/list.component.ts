import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
@Component({
    templateUrl: 'list.component.html'
})

export class ListComponent implements OnInit{

    id: string;

    constructor(private _route: ActivatedRoute){

    }

    ngOnInit(){
        this._route.params
            .map((params: {id: string}) => params.id)
            .subscribe((id) => {
                console.log(id);
                this.id = id;
            });
    }


}