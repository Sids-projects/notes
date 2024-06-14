import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-css-hello',
  templateUrl: './css-hello.component.html',
  styleUrls: ['./css-hello.component.scss'],
})
export class CssHelloComponent {
  mainContent: boolean = true;
  taskContent: boolean = false;
  cssTopics: any;

  constructor(
    private sharedService: SharedService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.cssTopics = this.sharedService.topicList.cssTopics;
      this.spinner.hide();
    }, 2000);
  }
}
