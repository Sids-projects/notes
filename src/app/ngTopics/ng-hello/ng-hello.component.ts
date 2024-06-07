import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-ng-hello',
  templateUrl: './ng-hello.component.html',
  styleUrls: ['./ng-hello.component.scss'],
})
export class NgHelloComponent {
  mainContent: boolean = true;
  taskContent: boolean = false;
  ngTopics: any;
  constructor(
    private sharedService: SharedService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.ngTopics = this.sharedService.topicList.ngTopics;
      this.spinner.hide();
    }, 2000);
  }
}
