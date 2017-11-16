import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
//import {Observable} from 'rxjs/Observable';
//import 'rxjs/Rx';
//import { Promise } from 'q';
//import { Response } from '@angular/http/src/static_response';

@Injectable()
export class Getdata {
    constructor(
        private http:Http
){}
 
getData(){
    return this.http.get("http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=cc14bc17695ac4eb0f2bcd08baf608ab")
                    .map((res:Response) => res.json())
                //    .catch((error:any)=>Observable.throw(error.json().error|| 'Server error'));

}

}