import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthenticationService {

  constructor(private httpClient: HttpClient) {}

  register(formData: FormData) {
    return this.httpClient.post("http://localhost:8080/users", formData, {
      reportProgress: true,
      observe: 'events'
    });
  }


}
