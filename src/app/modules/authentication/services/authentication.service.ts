import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserLoginModel} from '../models/UserLoginModel';
import {AuthenticatedUserModel} from '../models/AuthenticatedUserModel';

const REGISTER_URL = "http://localhost:8080/api/auth/register";
const LOGIN_URL = "http://localhost:8080/api/auth/login";

@Injectable()
export class AuthenticationService {

  constructor(private httpClient: HttpClient) {}

  login(payload: UserLoginModel) {
    return this.httpClient.post(LOGIN_URL, payload);
  }

  register(formData: FormData) {
    return this.httpClient.post(REGISTER_URL, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  logout() {
    localStorage.clear();
  }

  isAuthenticated() : boolean {
    return localStorage.getItem('currentUser') !== null;
  }

  hasRole(role: string) : boolean {
    if (this.isAuthenticated()) {
      let currentUser = <AuthenticatedUserModel>JSON.parse(localStorage.getItem("currentUser"));
      return currentUser.authorities.includes(role);
    }

    return false;
  }

  isAuthor(userId: string) : boolean {
    if (this.isAuthenticated()) {
      let currentUser = <AuthenticatedUserModel>JSON.parse(localStorage.getItem("currentUser"));
      return currentUser.id === userId;
    }

    return false;
  }

  getUserId() : string {
    if (this.isAuthenticated()) {
      let currentUser = <AuthenticatedUserModel>JSON.parse(localStorage.getItem("currentUser"));
      return currentUser.id;
    }

    return null;
  }
}
