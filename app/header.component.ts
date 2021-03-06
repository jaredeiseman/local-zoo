import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'header',
  template: `
    <div class="title">
      <h1>Fiona's Zoo</h1>
    </div>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Volunteer</a></li>
        <li><a href="#" (click)="showAddAnimal()">Add Animal</a></li>
      </ul>
    </nav>
  `
})

export class HeaderComponent {
  @Output() sendShowAdd = new EventEmitter();

  showAddAnimal() {
    this.sendShowAdd.emit();
  }
}
