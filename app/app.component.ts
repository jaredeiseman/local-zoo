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
    new Animal('Hippopotamus', 'Fiona', 0, 'Omnivore', 'The Pond', 'female', 'Doing hippo stuffs', 'Not doing hippo stuffs', 2, '/resources/img/fiona.jpg', new Date("July 4, 2017")),

    new Animal('Donkey', 'Don Keyheawwwwte', 7, 'Vegetarian', 'Next to the pond', 'male', 'Hanging out with his cousin Eeyore', 'That Tigger fellow', 0, '/resources/img/donkey.jpg', new Date("October 13, 2009")),

    new Animal('Flamingo', 'Flamey', 9, 'Omnivore', 'Ontop of the pond', 'male', 'Standing on one leg', 'Not sleeping', 1, '/resources/img/flamingo.jpg', new Date("January 1, 2008")),

    new Animal('Frog', 'Frogger McFroggerington', 19, 'Omnivore', 'Lillypad, onto of the pond', 'male', 'Eatin\' Flies', 'Playing Frogger', 9, '/resources/img/frog.jpg', new Date("December 11, 1997")),

    new Animal('Penguin', 'Come at me bro!', 1, 'Come at me bro!', 'Come at me bro!', 'Come at me bro!', 'Come at me bro!', 'Come at me bro!', 2, '/resources/img/penguin.jpg', new Date("May 5, 2016")),

    new Animal('Polar Bear', 'D\'awwww', 0, 'Carnivore', 'Someone\' hand', 'female', 'Looking adorable', 'Eagles...', 2, '/resources/img/polarbear.jpg', new Date("July 7, 2017")),
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
