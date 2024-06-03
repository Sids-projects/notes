import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-js-stateexpr',
  templateUrl: './js-stateexpr.component.html',
  styleUrls: ['./js-stateexpr.component.scss'],
})
export class JsStateexprComponent {
  content: any = 'Statement and Expression';
  contentPercent: any = '100%';
  getData: any;
  showSecondLi: any = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.getData = this.sharedService.jsStateExpres;
  }

  showContent(param1: any, param2: any) {
    this.content = param1;
    this.contentPercent = param2;
  }
}
