import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-js-equality',
  templateUrl: './js-equality.component.html',
  styleUrls: ['./js-equality.component.scss'],
})
export class JsEqualityComponent {
  content: any = 'Loose Equality Opeartor';
  getData: any;
  showSecondLi: any = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.getData = this.sharedService.jsEquality;
  }

  showContent(param: any) {
    this.content = param;
  }
}
