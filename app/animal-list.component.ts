import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <p>Animal List Component</p>
    <label for="age">Enter an age to filter by:</label>
    <input type="number" name="age" #age>
    <button (click)="filterByAge(age.value); age.value = '';">Filter</button>
    <ul *ngFor="let animal of childAnimals | filterByAge:ageToFilterBy">
      <li>Species: {{animal.species}}</li>
      <li>Name: {{animal.name}}</li>
      <li>Age: {{animal.age}}</li>
      <li>Diet: {{animal.diet}}</li>
      <li>Location: {{animal.location}}</li>
      <li>Sex: {{animal.sex}}</li>
      <li>Likes: {{animal.likes}}</li>
      <li>Dislikes: {{animal.dislikes}}</li>
      <li>Caretakers: {{animal.caretakers}}</li>
      <li><button (click)="editAnimal(animal)">Edit This Animal's Information</button>
    </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimals: Animal[];
  @Output() clickSender = new EventEmitter();

  ageToFilterBy: number = null;

  filterByAge(age) {
    this.ageToFilterBy = age;
  }

  editAnimal(animal) {
    this.clickSender.emit(animal);
  }
}
