import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-js-stateexpr',
  templateUrl: './js-stateexpr.component.html',
  styleUrls: ['./js-stateexpr.component.scss'],
})
export class JsStateexprComponent {
  content: any = 'Statement and Expression';
  getData: any;
  showSecondLi: any = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.getData = this.sharedService.jsStateExpres;
  }

  showContent(param: any) {
    this.content = param;
  }
}
