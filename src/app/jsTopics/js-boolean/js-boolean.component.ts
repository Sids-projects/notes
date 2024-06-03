import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-js-boolean',
  templateUrl: './js-boolean.component.html',
  styleUrls: ['./js-boolean.component.scss'],
})
export class JsBooleanComponent {
  content: any = 'And';
  contentPercent: any = '30%';
  getData: any;
  showSecondLi: any = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.getData = this.sharedService.jsBoolean;
  }

  showContent(param1: any, param2: any) {
    this.content = param1;
    this.contentPercent = param2;
  }
}
