import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-js-strict',
  templateUrl: './js-strict.component.html',
  styleUrls: ['./js-strict.component.scss'],
})
export class JsStrictComponent {
  content: any = 'Strict Mode';
  contentPercent: any = '100%';
  getData: any;
  showSecondLi: any = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.getData = this.sharedService.jsStrictMode;
  }

  showContent(param1: any, param2: any) {
    this.content = param1;
    this.contentPercent = param2;
  }

  translateFn() {
    this.showSecondLi = !this.showSecondLi;
  }
}
