import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  @Input() title: string;
  @Input() body: string;
  @Input() isOpen: boolean;

  onToggle() {
    this.isOpen = !this.isOpen;
  }
}
