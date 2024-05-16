import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-js-boolean',
  templateUrl: './js-boolean.component.html',
  styleUrls: ['./js-boolean.component.scss'],
})
export class JsBooleanComponent {
  content: any = 'And';
  getData: any;
  showSecondLi: any = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.getData = this.sharedService.jsBoolean;
  }

  showContent(param: any) {
    this.content = param;
  }
}
