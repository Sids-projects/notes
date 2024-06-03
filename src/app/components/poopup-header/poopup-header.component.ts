import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-poopup-header',
  templateUrl: './poopup-header.component.html',
  styleUrls: ['./poopup-header.component.scss'],
})
export class PoopupHeaderComponent {
  @Input() content: any = '';
  @Input() contentPercent: any = '';
  @Input() showSecondLi: any = false;
  @Output() toggleSecondLi: EventEmitter<boolean> = new EventEmitter();

  translateFn() {
    this.showSecondLi = !this.showSecondLi;
    this.toggleSecondLi.emit(this.showSecondLi);
  }
}
