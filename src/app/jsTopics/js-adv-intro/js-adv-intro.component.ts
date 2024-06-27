import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-js-adv-intro',
  templateUrl: './js-adv-intro.component.html',
  styleUrls: ['./js-adv-intro.component.scss'],
})
export class JsAdvIntroComponent {
  content: any = 'What is Js?';
  contentPercent: any = '100%';
  getData: any;
  showSecondLi: any = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.getData = this.sharedService.jsAdvIntro;
  }

  showContent(param1: any, param2: any) {
    this.content = param1;
    this.contentPercent = param2;
  }
}
