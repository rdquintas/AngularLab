import { Component, Input } from '@angular/core';
import { animation, animate, trigger, style, state, transition } from '@angular/animations';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({ height: 0, overflow: 'hidden', paddingTop: 0, paddingBottom: 0 })),
      state('expanded', style({ height: '*', overflow: 'auto', padding: '*' })),

      transition('collapsed => expanded', [
        animate('300ms ease-out')
      ]),

      transition('expanded => collapsed', [
        animate('300ms ease-in')
      ])
    ])
  ]
})
export class ZippyComponent {
  @Input('title') title: string;
  isExpanded: boolean;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
