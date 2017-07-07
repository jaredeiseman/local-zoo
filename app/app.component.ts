import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <p>app component</p>
    <animal-list [childAnimals]="animals"></animal-list>
  `
})

export class AppComponent {
  animals: Animal[] = [
    new Animal('Grizzly Bear', 'Yogi', 7, 'Carnivore', 'Northern Trail', 'male', 'Hibernating', 'Not having any honey', 2)
  ];
}
