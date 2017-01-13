import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpTestService {

  constructor(private http:Http) { }

  getCurrentTime() {
    return this.http.get('http://date.jsontest.com')
      .map(res => res.json());
  }

  requestGet(url: string) {
    var header = new Headers();
    return this.http.get(url, {headers: header})
      .map(res => res.json());
  }

}
