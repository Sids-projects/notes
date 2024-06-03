import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-js-switch',
  templateUrl: './js-switch.component.html',
  styleUrls: ['./js-switch.component.scss'],
})
export class JsSwitchComponent {
  content: any = 'Switch Case';
  contentPercent: any = '100%';
  getData: any;
  showSecondLi: any = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.getData = this.sharedService.jsSwitch;
  }

  showContent(param1: any, param2: any) {
    this.content = param1;
    this.contentPercent = param2;
  }
}
