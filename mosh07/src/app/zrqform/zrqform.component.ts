import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-zrqform',
  templateUrl: './zrqform.component.html',
  styleUrls: ['./zrqform.component.css']
})
export class ZrqformComponent {
  @Input() name: string;
  @Input() categories: string[];
  @Input() hasGuarantee: boolean;

  constructor() {
    this.name = 'nome do curso';
    this.categories = ['', 'Developement', 'Art', 'Languages'];
    this.hasGuarantee = true;
  }

}
