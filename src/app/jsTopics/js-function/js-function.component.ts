import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-js-function',
  templateUrl: './js-function.component.html',
  styleUrls: ['./js-function.component.scss'],
})
export class JsFunctionComponent {
  content: any = 'Functions';
  getData: any;
  showSecondLi: any = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.getData = this.sharedService.jsFunctions;
  }

  showContent(param: any) {
    this.content = param;
  }
}
