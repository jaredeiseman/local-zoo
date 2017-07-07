import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'header',
  template: `
    <div class="title">
      <h1>Local Zoo</h1>
    </div>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Volunteer</a></li>
      </ul>
    </nav>
  `
})

export class HeaderComponent {

}
