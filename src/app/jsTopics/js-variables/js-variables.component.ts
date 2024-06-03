import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-js-variables',
  templateUrl: './js-variables.component.html',
  styleUrls: ['./js-variables.component.scss'],
})
export class JsVariablesComponent {
  content: any = 'Variable';
  contentPercent: any = '50%';
  getData: any;
  showSecondLi: any = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.getData = this.sharedService.jsVariables;
  }

  showContent(param1: any, param2: any) {
    this.content = param1;
    this.contentPercent = param2;
  }
}
