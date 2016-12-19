import { Component, OnInit } from '@angular/core'
import { HomeService } from './home.service';

@Component({
    selector: 'Home',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit{
    posts = [
        {title: 'test1', content: 'content', createAt: '2016-12-1'},
        {title: 'test1', content: 'content', createAt: '2016-12-1'},
    ];

    constructor(private _service: HomeService){
        
    }

    ngOnInit(){
        this._service.getPosts().subscribe(data => {
            this.posts = data;
        })
    }
}
