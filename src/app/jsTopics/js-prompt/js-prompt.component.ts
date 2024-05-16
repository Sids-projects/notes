import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-js-prompt',
  templateUrl: './js-prompt.component.html',
  styleUrls: ['./js-prompt.component.scss'],
})
export class JsPromptComponent {
  content: any = 'Prompt';
  getData: any;
  showSecondLi: any = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.getData = this.sharedService.jsPrompt;
  }

  showContent(param: any) {
    this.content = param;
  }
}
