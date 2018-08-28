import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'submitted'
})
export class SubmittedTimePipe implements PipeTransform {

  transform(createdAt) {
    let now = new Date().getTime();
    let passedDate = new Date(createdAt).getTime();
    let diff = now - passedDate;
    diff = Math.floor(diff / 60000);
    if (diff < 1) return 'less than a minute';
    if (diff < 60) return diff + ' minute' + this.pluralize(diff);
    diff = Math.floor(diff / 60);
    if (diff < 24) return diff + ' hour' + this.pluralize(diff);
    diff = Math.floor(diff / 24);
    if (diff < 30) return diff + ' day' + this.pluralize(diff);
    diff = Math.floor(diff / 30);
    if (diff < 12) return diff + ' month' + this.pluralize(diff);
    diff = Math.floor(diff / 12);
    return diff + ' year' + this.pluralize(diff);
  }

  private pluralize(value) {
    if (value !== 1) return 's';
    else return '';
  }
}
