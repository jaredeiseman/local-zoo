import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <p>edit animal component</p>
    <label>species</label>
    <input value="{{animalBeingEdited.species}}" [(ngModel)]="animalBeingEdited.species">
    <label>Name</label>
    <input value="{{animalBeingEdited.name}}" [(ngModel)]="animalBeingEdited.name">
    <label>age</label>
    <input value="{{animalBeingEdited.age}}" [(ngModel)]="animalBeingEdited.age">
    <label>diet</label>
    <input value="{{animalBeingEdited.diet}}" [(ngModel)]="animalBeingEdited.diet">
    <label>location</label>
    <input value="{{animalBeingEdited.location}}" [(ngModel)]="animalBeingEdited.location">
    <label>sex</label>
    <input value="{{animalBeingEdited.sex}}" [(ngModel)]="animalBeingEdited.sex">
    <label>likes</label>
    <input value="{{animalBeingEdited.likes}}" [(ngModel)]="animalBeingEdited.likes">
    <label>dislikes</label>
    <input value="{{animalBeingEdited.dislikes}}" [(ngModel)]="animalBeingEdited.dislikes">
    <label>caretakers</label>
    <input value="{{animalBeingEdited.caretakers}}" [(ngModel)]="animalBeingEdited.caretakers">
    <button (click)="doneEditing()">Done</button>
  `
})

export class EditAnimalComponent {
  @Input() animalBeingEdited: Animal[];
  @Output() doneEditingClicked = new EventEmitter();

  doneEditing() {
    this.doneEditingClicked.emit();
  }
}
