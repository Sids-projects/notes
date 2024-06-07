import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-js-hello',
  templateUrl: './js-hello.component.html',
  styleUrls: ['./js-hello.component.scss'],
})
export class JsHelloComponent {
  mainContent: boolean = true;
  taskContent: boolean = false;
  jsTopics: any;

  constructor(private sharedService: SharedService) {
    this.jsTopics = this.sharedService.topicList.jsTopics;
  }

  ngOnInit() {}
}
