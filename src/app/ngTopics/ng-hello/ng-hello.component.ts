import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-ng-hello',
  templateUrl: './ng-hello.component.html',
  styleUrls: ['./ng-hello.component.scss'],
})
export class NgHelloComponent {
  mainContent: boolean = true;
  taskContent: boolean = false;
  jsTopics: any;
  constructor(private sharedService: SharedService) {
    this.jsTopics = this.sharedService.topicList.ngTopics;
  }
}
