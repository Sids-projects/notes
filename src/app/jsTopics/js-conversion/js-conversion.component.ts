import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-js-conversion',
  templateUrl: './js-conversion.component.html',
  styleUrls: ['./js-conversion.component.scss'],
})
export class JsConversionComponent {
  content: any = 'Type Conversion';
  contentPercent: any = '50%';
  getData: any;
  showSecondLi: any = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.getData = this.sharedService.jsConversion;
  }

  showContent(param1: any, param2: any) {
    this.content = param1;
    this.contentPercent = param2;
  }

  translateFn() {
    this.showSecondLi = !this.showSecondLi;
  }
}
