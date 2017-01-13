import { Component, OnInit } from '@angular/core';
import { HttpTestService } from '../http-test.service';

@Component({
  selector: 'app-http-test',
  template: `
    <button (click)="onTestGet()">button</button>
    <p>{{getCurTimeData}}</p>
  `,
  providers: [HttpTestService]
})
export class HttpTestComponent implements OnInit {

  getCurTimeData: string;

  constructor(private _httpService: HttpTestService) { }

  ngOnInit() {
  }

  onTestGet() {
    this._httpService.getCurrentTime()
      .subscribe(
        data => this.getCurTimeData = JSON.stringify(data),
        error => alert(error),
        () => console.log("Finished")
      );
  } 
}
