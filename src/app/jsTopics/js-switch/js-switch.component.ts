import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-js-switch',
  templateUrl: './js-switch.component.html',
  styleUrls: ['./js-switch.component.scss'],
})
export class JsSwitchComponent {
  content: any = 'Switch Case';
  getData: any;
  showSecondLi: any = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.getData = this.sharedService.jsSwitch;
  }

  showContent(param: any) {
    this.content = param;
  }
}
