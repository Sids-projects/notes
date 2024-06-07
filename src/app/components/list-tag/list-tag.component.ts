import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-list-tag',
  templateUrl: './list-tag.component.html',
  styleUrls: ['./list-tag.component.scss'],
})
export class ListTagComponent {
  @Input() equalityProp: any;
  @Input() equalityValue: any;
  @Input() loopli1: any;
  @Input() loopli2: any;
  @Input() showSecondLi: any;

  constructor(private sanitizer: DomSanitizer) {}

  sanitizeHtml(html: string): any {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
