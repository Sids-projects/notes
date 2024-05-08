import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.scss'],
})
export class JavascriptComponent {
  hideMainTopic: any;
  hideTopics: boolean = true;
  hideContent: any;

  topicList: any = '';
  javascript: any;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.topicList = this.sharedService.topicList;
  }

  navControl() {
    this.hideTopics = !this.hideTopics;
  }

  matchTopic(param: any) {
    this.hideMainTopic = param;
  }
}
