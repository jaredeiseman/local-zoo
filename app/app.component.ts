import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <p>app component</p>
  `
})

export class AppComponent {
  animals: Animal[];
}
