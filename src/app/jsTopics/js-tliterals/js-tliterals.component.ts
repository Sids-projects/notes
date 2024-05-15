import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-js-tliterals',
  templateUrl: './js-tliterals.component.html',
  styleUrls: ['./js-tliterals.component.scss'],
})
export class JsTliteralsComponent {
  content: any = 'Template Literals ES6';
  getData: any;
  showSecondLi: any = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.getData = this.sharedService.jsTliterals;
  }

  showContent(param: any) {
    this.content = param;
  }
}
