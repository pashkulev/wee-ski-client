import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'discipline'
})
export class DisciplinesPipe implements PipeTransform {
  constructor(){}

  transform(disciplineEnum) {
    return disciplineEnum.split("_").join(" ");
  }
}
