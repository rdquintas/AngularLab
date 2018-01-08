import { Component } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    trigger('fade', [

      // This is the FADE IN
      transition('void => *', [
        style({ backgroundColor: 'yellow', opacity: 0 }),
        animate(2000, style({ backgroundColor: 'white', opacity: 1 }))
      ]),

      // This is the FADE OUT
      transition('* => void', [
        animate(500, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class TodosComponent {
  items: any[] = [
    'Wash the dishes',
    'Call the accountant',
    'Apply for a car insurance'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = '';
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}
