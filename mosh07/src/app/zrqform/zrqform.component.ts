import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-zrqform',
  templateUrl: './zrqform.component.html',
  styleUrls: ['./zrqform.component.css']
})
export class ZrqformComponent {
  @Input() name: string;
  @Input() categories: any[];
  @Input() hasGuarantee: boolean;

  constructor() {
    this.name = 'nome do curso';
    this.categories = [
      { id: 1, name: 'Development' },
      { id: 2, name: 'Art' },
      { id: 3, name: 'Languages' },
    ];
    this.hasGuarantee = true;
  }


  submit(course) {
    console.log('Course: ', course);
  }
}
