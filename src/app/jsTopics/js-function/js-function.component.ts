import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-js-function',
  templateUrl: './js-function.component.html',
  styleUrls: ['./js-function.component.scss'],
})
export class JsFunctionComponent {
  content: any = 'Functions';
  contentPercent: any = '20%';
  getData: any;
  showSecondLi: any = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.getData = this.sharedService.jsFunctions;
  }

  showContent(param1: any, param2: any) {
    this.content = param1;
    this.contentPercent = param2;
  }
}
