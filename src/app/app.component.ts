import { Component } from '@angular/core';
import { HttpTestComponent } from './http-test/http-test.component';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="req()">button</button>
  {{getData}}
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  getData;

  constructor(private http: Http) {
  }

  req() {
    this.getData = this.http.get('http://data.jsontest.com').
      map(res => res.json());

    console.log(this.getData);
  }
}
