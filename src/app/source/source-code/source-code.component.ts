import { Component, Input } from '@angular/core';
import * as Prism from 'prismjs';
// Import specific languages to reduce bundle size
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
// Import plugins
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/show-language/prism-show-language';

@Component({
  selector: 'app-source-code',
  templateUrl: './source-code.component.html',
  styleUrls: ['./source-code.component.scss'],
})
export class SourceCodeComponent {
  @Input() showCode: string = '';
  ngAfterViewInit() {
    Prism.highlightAll();
  }
}
