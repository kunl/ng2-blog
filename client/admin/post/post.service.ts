import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PostService {
    constructor( private _http: Http){

    }

    save(post){
        this._http.post('/api/posts', JSON.stringify(post))
            .map(res => console.log(res)).subscribe()
    }
}