import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RoleService {

  constructor(private httpClient: HttpClient) { }

  getUserRoles(url) {
    return this.httpClient.get(url);
  }
}
