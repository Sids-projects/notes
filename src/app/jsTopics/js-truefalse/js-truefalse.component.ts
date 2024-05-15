import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-js-truefalse',
  templateUrl: './js-truefalse.component.html',
  styleUrls: ['./js-truefalse.component.scss'],
})
export class JsTruefalseComponent {
  content: any = 'Truthy';
  getData: any;
  showSecondLi: any = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.getData = this.sharedService.jsTruthyFalsy;
  }

  showContent(param: any) {
    this.content = param;
  }
}
