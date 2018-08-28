import {Pipe, PipeTransform} from '@angular/core';
import {UserModel} from '../../modules/users/models/user.model';

@Pipe({
  name: 'author'
})
export class AuthorPipe implements PipeTransform {

  transform(author: UserModel) {
    let username = author.firstName || "";
    username += author.lastName ? " " + author.lastName : "";
    username = username.trim();

    if (!username) {
      username = author.email.substring(0, author.email.indexOf("@"));
    }

    return username;
  }
}
