import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';

@Injectable()
export class AuthenticationService {

  constructor(private httpClient: HttpClient) {}

  uploadImage(formData: FormData) {
    return this.httpClient.post("http://localhost:8080/upload", formData, {
      reportProgress: true,
      observe: 'events'
    });
  }


}
