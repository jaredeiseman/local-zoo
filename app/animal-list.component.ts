import { Component, Input } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <p>Animal List Component</p>
    <ul *ngFor="let animal of childAnimals">
      <li>Species: {{animal.species}}</li>
      <li>Name: {{animal.name}}</li>
      <li>Age: {{animal.age}}</li>
      <li>Diet: {{animal.diet}}</li>
      <li>Location: {{animal.location}}</li>
      <li>Sex: {{animal.sex}}</li>
      <li>Likes: {{animal.likes}}</li>
      <li>Dislikes: {{animal.dislikes}}</li>
      <li>Caretakers: {{animal.caretakers}}</li>
    </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimals: Animal[];
}
