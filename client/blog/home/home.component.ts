import { Component, OnInit } from '@angular/core'
import { HomeService } from './home.service';

@Component({
    selector: 'Home',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit{
    posts = [];

    constructor(private _service: HomeService){
        
    }

    ngOnInit(){
        this._service.getPosts().subscribe(data => {
            this.posts = data;
        })
    }
}
