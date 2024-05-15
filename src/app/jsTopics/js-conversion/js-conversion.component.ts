import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-js-conversion',
  templateUrl: './js-conversion.component.html',
  styleUrls: ['./js-conversion.component.scss'],
})
export class JsConversionComponent {
  content: any = 'Type Conversion';
  getData: any;
  showSecondLi: any = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.getData = this.sharedService.jsConversion;
  }

  showContent(param: any) {
    this.content = param;
  }
}
