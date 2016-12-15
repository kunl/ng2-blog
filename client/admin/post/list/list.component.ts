import { Component } from '@angular/core';

@Component({
    selector: 'List',
    templateUrl: 'list.component.html'
})
export  class ListComponent {
    title: string;
    content: string;

    submit(){
        console.log(this)
    }
}