import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const USERS_BASE_URL = 'http://localhost:8080/api/users';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUserByEmail(email: string) {
    this.httpClient.get(`${USERS_BASE_URL}/settings${email}`);
  }
}
