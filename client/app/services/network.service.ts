import {Injectable } from '@angular/core';
import {Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NetworkService{
    constructor(private http:Http){
        console.log('Network Service Initialized ...');
    }
    getNetworkTasks(){
        return this.http.get('http://192.168.214.128:3000/api/networkTasks')
            .map(res => res.json());
    }
}