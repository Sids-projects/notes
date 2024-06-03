import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-js-ifelse',
  templateUrl: './js-ifelse.component.html',
  styleUrls: ['./js-ifelse.component.scss'],
})
export class JsIfelseComponent {
  content: any = 'If Else';
  contentPercent: any = '50%';
  getData: any;
  showSecondLi: any = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.getData = this.sharedService.jsIfelse;
  }

  showContent(param1: any, param2: any) {
    this.content = param1;
    this.contentPercent = param2;
  }
}
