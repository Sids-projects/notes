import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-js-truefalse',
  templateUrl: './js-truefalse.component.html',
  styleUrls: ['./js-truefalse.component.scss'],
})
export class JsTruefalseComponent {
  content: any = 'Truthy';
  contentPercent: any = '50%';
  getData: any;
  showSecondLi: any = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.getData = this.sharedService.jsTruthyFalsy;
  }

  showContent(param1: any, param2: any) {
    this.content = param1;
    this.contentPercent = param2;
  }
}
