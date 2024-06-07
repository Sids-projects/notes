import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-ng-intro',
  templateUrl: './ng-intro.component.html',
  styleUrls: ['./ng-intro.component.scss'],
})
export class NgIntroComponent {
  content: any = 'What is Angular';
  contentPercent: any = '50%';
  getData: any;
  showSecondLi: any = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.getData = this.sharedService.ngIntro;
  }

  showContent(param1: any, param2: any) {
    this.content = param1;
    this.contentPercent = param2;
  }
}
