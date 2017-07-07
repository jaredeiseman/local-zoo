import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <div class="filter">
      <label for="age">Enter a maximum age to display:</label>
      <input type="number" name="age" #age>
      <button (click)="filterByAge(age.value); age.value = '';">Filter</button>
    </div>
    <div class="card" *ngFor="let animal of childAnimals | filterByAge:ageToFilterBy">
      <img [src]="findPhoto(animal)">
      <span>Species: {{animal.species}}</span>
      <span>Name: {{animal.name}}</span>
      <span>Age: {{animal.age}}</span>
      <span>Diet: {{animal.diet}}</span>
      <span>Location: {{animal.location}}</span>
      <span>Sex: {{animal.sex}}</span>
      <span>Likes: {{animal.likes}}</span>
      <span>Dislikes: {{animal.dislikes}}</span>
      <span>Caretakers: {{animal.caretakers}}</span>
      <span>Admitted: {{formatDate(animal.admitted)}}</span>
      <button (click)="editAnimal(animal)">Edit This Animal's Information</button>
    </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimals: Animal[];
  @Output() clickSender = new EventEmitter();

  ageToFilterBy: number = null;

  formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return `${monthNames[monthIndex]} ${day}, ${year}`;
  }

  findPhoto(animal) {
    if (animal.imgURL !== '') {
      return animal.imgURL;
    } else {
      return '/resources/img/placeholder.png';
    }
  }

  filterByAge(age) {
    this.ageToFilterBy = age;
  }

  editAnimal(animal) {
    this.clickSender.emit(animal);
  }
}
