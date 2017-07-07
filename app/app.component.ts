import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <header (sendShowAdd)="showAddAnimal()"></header>
    <div class="container">
      <animal-list [childAnimals]="animals" (clickSender)="editAnimal($event)"></animal-list>
      <add-animal (clickSender)="addAnimal($event)" *ngIf="addAnimalShown"></add-animal>
      <edit-animal *ngIf="animalBeingEdited" [animalBeingEdited]="animalBeingEdited" (doneEditingClicked)="doneEditing()"></edit-animal>
    </div>
    <footer (sendShowAdd)="showAddAnimal()"></footer>
  `
})

export class AppComponent {
  animals: Animal[] = [
    new Animal('Hippopotamus', 'Fiona', 1, 'Omnivore', 'The Pond', 'female', 'Doing hippo stuffs', 'Not doing hippo stuffs', 2, '/resources/img/fiona.jpg'),
    new Animal('Grizzly Bear', 'booboo', 1, 'Carnivore', 'Northern Trail', 'male', 'Hibernating', 'Not having any honey', 2),
    new Animal('Grizzly Bear', 'bear', 9, 'Carnivore', 'Northern Trail', 'male', 'Hibernating', 'Not having any honey', 2),
    new Animal('Grizzly Bear', 'burr', 2, 'Carnivore', 'Northern Trail', 'male', 'Hibernating', 'Not having any honey', 2),
    new Animal('Grizzly Bear', 'burrith', 1, 'Carnivore', 'Northern Trail', 'male', 'Hibernating', 'Not having any honey', 2),
  ];

  animalBeingEdited = null;
  addAnimalShown: boolean = false;

  showAddAnimal() {
    this.addAnimalShown = true;
  }

  addAnimal(animal) {
    this.animals.push(animal);
    this.addAnimalShown = false;
  }

  editAnimal(animal: Animal) {
    this.animalBeingEdited = animal;
  }

  doneEditing() {
    this.animalBeingEdited = null;
  }
}
