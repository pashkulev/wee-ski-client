import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'localDate'
})
export class LocalDatePipe implements PipeTransform {
  constructor(){}

  // transform(zonedDateTimeString) {
  //   debugger;
  //   let zonedTime = new Date(zonedDateTimeString);
  //   let offsetHours = new Date().getTimezoneOffset() / 60 * -1;
  //   zonedTime.setHours(zonedTime.getHours() + offsetHours);
  //   let result = zonedTime.toString();
  //   return result.substring(0, result.indexOf("GMT") - 4);
  // }

  transform(dateTimeString) {
    let date = new Date(dateTimeString).toString();
    return date.substring(4, date.indexOf("GMT") - 9);
  }
}
