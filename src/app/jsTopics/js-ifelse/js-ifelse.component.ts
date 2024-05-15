import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-js-ifelse',
  templateUrl: './js-ifelse.component.html',
  styleUrls: ['./js-ifelse.component.scss'],
})
export class JsIfelseComponent {
  content: any = 'If Else';
  getData: any;
  showSecondLi: any = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.getData = this.sharedService.jsIfelse;
  }

  showContent(param: any) {
    this.content = param;
  }
}
