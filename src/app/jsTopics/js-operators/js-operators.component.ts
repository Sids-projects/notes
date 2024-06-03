import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-js-operators',
  templateUrl: './js-operators.component.html',
  styleUrls: ['./js-operators.component.scss'],
})
export class JsOperatorsComponent {
  content: any = 'Typeof';
  contentPercent: any = '30%';
  getData: any;
  showSecondLi: any = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.getData = this.sharedService.jsOperators;
  }

  showContent(param1: any, param2: any) {
    this.content = param1;
    this.contentPercent = param2;
  }

  translateFn() {
    this.showSecondLi = !this.showSecondLi;
  }
}
