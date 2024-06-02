import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-topic-menu',
  templateUrl: './topic-menu.component.html',
  styleUrls: ['./topic-menu.component.scss'],
})
export class TopicMenuComponent {
  @Input() routerLink: string = '';
  @Input() icon: string = '';
  @Input() p: string = '';

  constructor(private sanitizer: DomSanitizer) {}

  sanitizeHtml(html: string): any {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
