import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-js-equality',
  templateUrl: './js-equality.component.html',
  styleUrls: ['./js-equality.component.scss'],
})
export class JsEqualityComponent {
  content: any = 'Loose Equality Opeartor';
  contentPercent: any = '50%';
  getData: any;
  showSecondLi: any = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.getData = this.sharedService.jsEquality;
  }

  showContent(param1: any, param2: any) {
    this.content = param1;
    this.contentPercent = param2;
  }
}
