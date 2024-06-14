import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-css-intro',
  templateUrl: './css-intro.component.html',
  styleUrls: ['./css-intro.component.scss'],
})
export class CssIntroComponent {
  content: any = 'Intro';
  contentPercent: any = '30%';
  getData: any;
  showSecondLi: any = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.getData = this.sharedService.cssIntro;
  }

  showContent(param1: any, param2: any) {
    this.content = param1;
    this.contentPercent = param2;
  }
}
