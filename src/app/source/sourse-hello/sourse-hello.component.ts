import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-sourse-hello',
  templateUrl: './sourse-hello.component.html',
  styleUrls: ['./sourse-hello.component.scss'],
})
export class SourseHelloComponent {
  mainContent: boolean = true;
  taskContent: boolean = false;
  sourceTopics: any;

  constructor(
    private sharedService: SharedService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.sourceTopics = this.sharedService.topicList.sourceTopics;
    // this.spinner.show();
    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 2000);
  }
}
