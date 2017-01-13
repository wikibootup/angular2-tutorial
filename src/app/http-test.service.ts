import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpTestService {

  constructor(private http:Http) { }

  getCurrentTime() {
    return this.http.get('http://date.jsontest.com')
      .map(res => res.json());
  }

  requestGet(url: string) {
    return this.http.get(url)
      .map(res => res.json());
  }

}
