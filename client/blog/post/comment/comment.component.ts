import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
    selector: 'comment',
    template: `<div id="disqus_thread"></div>`
})
export class CommentComponent implements OnInit {
    constructor(private _el: ElementRef) { }
    
    ngOnInit() { 
        this.createElement();
    }

    createElement() {
        let dsq = document.createElement('script');

        dsq.type = 'text/javascript';
        dsq.setAttribute('data-timestamp',  (new Date()).getTime().toString());
        dsq.src = '//kunlin.disqus.com/embed.js';

        this._el.nativeElement.appendChild(dsq);
    }
}