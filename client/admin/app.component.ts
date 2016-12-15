/**
 * Created by kunl on 2016/11/2-0002.
 */

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    constructor() { }
    ngOnInit() { }

}

@Component({
    selector: 'welcome',
    template: 'welcome'
})
export class WelcomeComponent implements OnInit {
    constructor() { }
    ngOnInit() { }

}