import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const LOGS_BASE_URL = "http://localhost:8080/api/logs";

@Injectable()
export class LogService {

  constructor(private httpClient: HttpClient) { }

  getLogsFirstPage() {
    return this.httpClient.get(LOGS_BASE_URL + "?size=10&sort=id,desc");
  }

  getLogsByParameters(index: number, size: number, ascending: boolean) {
    let url = `${LOGS_BASE_URL}?page=${index}&size=${size}&sort=id,${ascending ? "asc" : "desc"}`;
    return this.httpClient.get(url);
  }

  getLogsByUrl(url: string) {
    return this.httpClient.get(url);
  }
}
