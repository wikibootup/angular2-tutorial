import { Component } from '@angular/core';
import { HttpTestComponent } from './http-test/http-test.component';

@Component({
  selector: 'app-root',
  template: `
    <app-http-test></app-http-test>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {}
}
