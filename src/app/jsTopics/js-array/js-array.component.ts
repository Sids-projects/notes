import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-js-array',
  templateUrl: './js-array.component.html',
  styleUrls: ['./js-array.component.scss'],
})
export class JsArrayComponent {
  content: any = 'Array';
  contentPercent: any = '10%';
  getData: any;
  showSecondLi: any = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.getData = this.sharedService.jsArray;
  }

  showContent(param1: any, param2: any) {
    this.content = param1;
    this.contentPercent = param2;
  }
}
