import { Component } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss'],
})
export class AngularComponent {
  hideTopics: boolean = true;

  navControl() {
    this.hideTopics = !this.hideTopics;
  }
}
