import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-js-strict',
  templateUrl: './js-strict.component.html',
  styleUrls: ['./js-strict.component.scss'],
})
export class JsStrictComponent {
  content: any = 'Strict Mode';
  getData: any;
  showSecondLi: any = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.getData = this.sharedService.jsStrictMode;
  }

  showContent(param: any) {
    this.content = param;
  }
}
