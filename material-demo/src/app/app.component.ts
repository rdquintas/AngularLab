import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isChecked = false;
  isRadioButtonChecked = true;
  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];
  selectedFood = 'pizza-1';
  minDate = new Date(2018, 1, 1);
  maxDate = new Date(2018, 1, 10);

  onChange(event) {
    console.log(event);
  }
}
