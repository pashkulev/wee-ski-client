import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SharedDeleteService {

  constructor(private httpClient: HttpClient) { }

  deleteResource(userUrl: string) {
    return this.httpClient.delete(userUrl);
  }
}
