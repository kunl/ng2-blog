import { Component, OnInit, ElementRef } from '@angular/core';


@Component({
    selector: 'comment',
    template: `<div id="disqus_thread"></div>`
})
export class CommentComponent implements OnInit {
    constructor(private _el: ElementRef) { }
    
    ngOnInit() { 
        console.log(this._el)
        this.createElement();
    }

    createElement() {
        let dsq = document.createElement('script');

        dsq.type = 'text/javascript';
        dsq.async = true;
        dsq.setAttribute('data-timestamp', +new Date())
        dsq.src = '//kunlin.disqus.com/embed.js';


        this._el.nativeElement.appendChild(dsq);
    
    }
}