import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSelected: boolean;
  constructor() {
    this.isSelected = true;
  }

  onClick() {

    if (this.isSelected) {
      this.isSelected = false;
    } else {
      this.isSelected = true;
    }

  }
}
