import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'footer',
  template: `
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Volunteer</a></li>
      </ul>
    </nav>
    <span>&copy;2017, Jared Eiseman</span>
  `
})

export class FooterComponent {

}
