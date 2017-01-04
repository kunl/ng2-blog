import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class PostService {
    constructor( private _http: Http, private headers: Headers){

    }

    save(post){
        console.log(this.headers)
        this._http.post('/api/posts', JSON.stringify(post), {headers: this.headers})
            .map(res => console.log(res)).subscribe()
    }
}