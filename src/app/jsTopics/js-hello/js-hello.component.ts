import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-js-hello',
  templateUrl: './js-hello.component.html',
  styleUrls: ['./js-hello.component.scss'],
})
export class JsHelloComponent {
  mainContent: boolean = true;
  taskContent: boolean = false;
  jsTopics: any;

  constructor(
    private sharedService: SharedService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.jsTopics = this.sharedService.topicList.jsTopics;
      this.spinner.hide();
    }, 2000);
  }
}
