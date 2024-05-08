import { Component, Input } from '@angular/core';
import * as Prism from 'prismjs';
// Import specific languages to reduce bundle size
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
// Import plugins
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/show-language/prism-show-language';

@Component({
  selector: 'app-js-code',
  templateUrl: './js-code.component.html',
  styleUrls: ['./js-code.component.scss'],
})
export class JsCodeComponent {
  @Input() showCode: string = '';
  ngAfterViewInit() {
    Prism.highlightAll();
  }
}
