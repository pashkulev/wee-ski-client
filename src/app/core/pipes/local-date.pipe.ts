import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'localDate'
})
export class LocalDatePipe implements PipeTransform {
  constructor(){}

  transform(dateTimeString) {
    let date = new Date(dateTimeString).toString();
    return date.substring(4, date.indexOf("GMT") - 9);
  }
}
