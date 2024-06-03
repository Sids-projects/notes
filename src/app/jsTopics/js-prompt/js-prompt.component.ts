import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-js-prompt',
  templateUrl: './js-prompt.component.html',
  styleUrls: ['./js-prompt.component.scss'],
})
export class JsPromptComponent {
  content: any = 'Prompt';
  contentPercent: any = '100%';
  getData: any;
  showSecondLi: any = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.getData = this.sharedService.jsPrompt;
  }

  showContent(param1: any, param2: any) {
    this.content = param1;
    this.contentPercent = param2;
  }
}
