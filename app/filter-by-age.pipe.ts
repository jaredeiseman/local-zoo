import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "filterByAge",
  pure: false
})


export class FilterByAgePipe implements PipeTransform {
  transform(input: Animal[], age) {
    var output: Animal[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].age >= age) {
        output.push(input[i]);
      }
    }
    if (age) {
      return output;
    } else {
      return input;
    }
  }
}
