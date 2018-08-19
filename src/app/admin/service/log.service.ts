import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const LOGS_URL = "http://localhost:8080/api/logs?size=10&sort=id,desc";

@Injectable()
export class LogService {

  constructor(private httpClient: HttpClient) { }

  getLogsFirstPage() {
    return this.httpClient.get(LOGS_URL);
  }

  getLogs(url) {
    return this.httpClient.get(url);
  }


}
