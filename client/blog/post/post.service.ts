import {Injectable} from "@angular/core";
import { Http, BaseRequestOptions } from '@angular/http';



@Injectable()
export class PostService {

    _base_url = '/api/posts/'
    constructor(public _http: Http, public op: BaseRequestOptions){

        console.log(op)
    }
    getById(id){
        let url = this._base_url + id;
        return this._http.get(url).map(res => res.json()).map(res => res.data);
    }
}