import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-js-tliterals',
  templateUrl: './js-tliterals.component.html',
  styleUrls: ['./js-tliterals.component.scss'],
})
export class JsTliteralsComponent {
  content: any = 'Template Literals ES6';
  contentPercent: any = '100%';
  getData: any;
  showSecondLi: any = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.getData = this.sharedService.jsTliterals;
  }

  showContent(param1: any, param2: any) {
    this.content = param1;
    this.contentPercent = param2;
  }

  translateFn() {
    this.showSecondLi = !this.showSecondLi;
  }
}
