import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const USERS_URL = "http://localhost:8080/api/users?page=0&size=10&sort=id,desc";

@Injectable()
export class AdminUserService {

  constructor(private httpClient: HttpClient) { }

  getUsersFirstPage() {
    return this.httpClient.get(USERS_URL);
  }

  getUsers(url) {
    return this.httpClient.get(url);
  }

  deleteUser(userUrl: string) {
    return this.httpClient.delete(userUrl);
  }


}
