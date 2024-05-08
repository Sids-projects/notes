import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-js-intro',
  templateUrl: './js-intro.component.html',
  styleUrls: ['./js-intro.component.scss'],
})
export class JsIntroComponent {
  content: any = 'Intro';
  getData: any;
  showSecondLi: any = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.getData = this.sharedService.jsIntro;
  }

  showContent(param: any) {
    this.content = param;
  }
}
