import { Component, OnInit } from '@angular/core';
import { HttpTestService } from '../http-test.service';

@Component({
  selector: 'app-http-test',
  template: `
    <button (click)="onTestGet()">get current time</button>
    <p>{{getCurTimeData}}</p>

    <div>   
      <input #urlInput type="text">
        <button (click)="onRequestGet(urlInput.value)">input url for http get request</button>  
      <p>{{getData}}</p>
    </div>
  `,
  providers: [HttpTestService]
})
export class HttpTestComponent implements OnInit {

  getCurTimeData: string;
  getData: string;

  constructor(private _httpService: HttpTestService) { }

  ngOnInit() {
  }

  onRequestGet(url: string) {
    this._httpService.requestGet(url)
      .subscribe(
        data => this.getData = JSON.stringify(data),
        error => alert(error),
        () => console.log("finished")
      );
  }

  onTestGet() {
    this._httpService.getCurrentTime()
      .subscribe(
        data => this.getCurTimeData = JSON.stringify(data),
        error => alert(error),
        () => console.log("finished")
      );
  } 
}
