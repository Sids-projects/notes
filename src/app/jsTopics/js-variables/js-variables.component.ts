import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-js-variables',
  templateUrl: './js-variables.component.html',
  styleUrls: ['./js-variables.component.scss'],
})
export class JsVariablesComponent {
  content: any = 'Variable';
  getData: any;
  showSecondLi: any = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.getData = this.sharedService.jsVariables;
  }

  showContent(param: any) {
    this.content = param;
  }
}
