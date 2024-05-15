import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'notes';
  hideMainTopic: any;
  hideTopics: boolean = true;
  hideContent: any;
  jsTopicList: any = '';

  topicName: string = 'Javascript';
  javascript: boolean = true;
  angular: boolean = false;
  css: boolean = false;
  scss: boolean = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.jsTopicList = this.sharedService.topicList.jsTopics;
  }

  navControl() {
    this.hideTopics = !this.hideTopics;
  }

  matchTopic(param: any) {
    this.hideMainTopic = param;
  }

  showTopicList(param: string) {
    if (param === 'javascript') {
      this.javascript = true;
      this.angular = false;
      this.css = false;
      this.scss = false;
      this.topicName = 'Javascript';
    } else if (param === 'angular') {
      this.javascript = false;
      this.angular = true;
      this.css = false;
      this.scss = false;
      this.topicName = 'Angular';
    } else if (param === 'css') {
      this.javascript = false;
      this.angular = false;
      this.css = true;
      this.scss = false;
      this.topicName = 'Css';
    } else if (param === 'scss') {
      this.javascript = false;
      this.angular = false;
      this.css = false;
      this.scss = true;
      this.topicName = 'Scss';
    }
  }
}
