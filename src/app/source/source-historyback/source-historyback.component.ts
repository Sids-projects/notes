import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-source-historyback',
  templateUrl: './source-historyback.component.html',
  styleUrls: ['./source-historyback.component.scss'],
})
export class SourceHistorybackComponent {
  content: any = 'Intro';
  contentPercent: any = '50%';
  getData: any;
  showSecondLi: any = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.getData = this.sharedService.srcHistoryBack;
  }

  showContent(param1: any, param2: any) {
    this.content = param1;
    this.contentPercent = param2;
  }
}
