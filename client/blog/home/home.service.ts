import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HomeService {
    constructor(private _http: Http){}

    getPosts(){
        return this._http.get('/api/posts')
                .map(res => res.json())
                .map(data => data.data)
    }
}