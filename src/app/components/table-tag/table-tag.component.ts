import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-table-tag',
  templateUrl: './table-tag.component.html',
  styleUrls: ['./table-tag.component.scss'],
})
export class TableTagComponent {
  @Input() equalityProp: any;
  @Input() equalityValue: any;
  @Input() th: any;
  @Input() tr: any;
  @Input() showSecondLi: any;

  constructor(private sanitizer: DomSanitizer) {}

  sanitizeHtml(html: string): any {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
