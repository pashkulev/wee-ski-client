import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const USERS_URL = "http://localhost:8080/api/users?page=0&size=5&sort=createdAt,desc";

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

  blockUser(userUrl: string) {
    return this.httpClient.patch(userUrl, {
      enabled: false
    });
  }

  unblockUser(userUrl: string) {
    return this.httpClient.patch(userUrl, {
      enabled: true
    });
  }

  setUserAuthorities(userId: string, authorities: string[]) {
    const url = `http://localhost:8080/api/users/${userId}/authorities`;
    return this.httpClient.patch(url, authorities);
  }
}
