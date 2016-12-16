import { Component } from '@angular/core'


@Component({
    selector: 'Home',
    templateUrl: 'home.component.html'
})

export class HomeComponent{
    posts = [
        {title: 'test1', content: 'content', createAt: '2016-12-1'},
        {title: 'test1', content: 'content', createAt: '2016-12-1'},
        {title: 'test1', content: 'content', createAt: '2016-12-1'},
        {title: 'test1', content: 'content', createAt: '2016-12-1'},
    ]
}
