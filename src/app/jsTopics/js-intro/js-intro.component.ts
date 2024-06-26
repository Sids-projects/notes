import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-js-intro',
  templateUrl: './js-intro.component.html',
  styleUrls: ['./js-intro.component.scss'],
})
export class JsIntroComponent {
  content: any = 'Intro';
  contentPercent: any = '50%';
  getData: any;
  showSecondLi: any = false;

  constructor(
    private sharedService: SharedService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.getData = this.sharedService.jsIntro;
  }

  sanitizeHtml(html: string): any {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  showContent(param1: any, param2: any) {
    this.content = param1;
    this.contentPercent = param2;
  }
}
