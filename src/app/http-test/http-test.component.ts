import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-http-test',
  template: `
    <button (click)="req()">button</button>
    {{getData}}
  `
})
export class HttpTestComponent implements OnInit {

  getData;

  constructor(private http: Http) { }

  ngOnInit() {
  }

  req() {
    this.getData = this.http.get('http://data.jsontest.com').
      map(res => res.json());
  } 
}
