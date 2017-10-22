import { element } from 'protractor';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  val_input: string;
  val_output: string;

  onKeyup() {
    let list: string[];
    list = this.val_input.toLowerCase().split(' ');

    for (let index = 0; index < list.length; index++) {
      let el: string;
      el = list[index];
      el = el.toLowerCase();
      if (el.length > 2) {
        el = this.capitalize(el);
      }
      list[index] = el;
    }

    this.val_output = list.join(' ');

  }

  private capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
}
