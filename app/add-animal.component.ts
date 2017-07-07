import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Animal } from './animal.model';

@Component({
  selector: 'add-animal',
  template: `
    <h2>Add an Animal</h2>
    <form #addAnimalForm="ngForm" (ngSubmit)="addAnimal(addAnimalForm); false">
      <div class="column one">
        <label for="species">Species</label>
        <input type="text" name="species" ngModel>
        <label for="name">Name</label>
        <input type="text" name="name" ngModel>
        <label for="age">age</label>
        <input type="number" name="age" ngModel>
        <label for="diet">diet</label>
        <input type="text" name="diet" ngModel>
        <label for="location">location</label>
        <input type="text" name="location" ngModel>
      </div>
      <div class="column two">
        <label for="sex">sex</label>
        <input type="text" name="sex" ngModel>
        <label for="likes">likes</label>
        <input type="text" name="likes" ngModel>
        <label for="dislikes">dislikes</label>
        <input type="text" name="dislikes" ngModel>
        <label for="caretakers">caretakers</label>
        <input type="number" name="caretakers" ngModel>
        <label for="img">Image URL</label>
        <input type="text" name="img" ngModel>
      </div>
      <button type="submit">Submit</button>
    </form>
  `
})

export class AddAnimalComponent {
  @Output() clickSender = new EventEmitter();

  addAnimal(form: NgForm) {
    console.log(form);
    var newAnimal = new Animal(form.value.species,
                               form.value.name,
                               form.value.age,
                               form.value.diet,
                               form.value.location,
                               form.value.sex,
                               form.value.likes,
                               form.value.dislikes,
                               form.value.caretakers,
                               form.value.img);
    this.clickSender.emit(newAnimal);
  }
}
