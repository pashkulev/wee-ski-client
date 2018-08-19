import { Component, OnInit } from '@angular/core';
import {LogService} from '../../service/log.service';
import {LogModel} from '../../models/log.model';
import {PageModel} from '../../../shared/models/page.model';
import {generatePageNumbers} from '../../../shared/utils/PageNumbersGenerator';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  logs: LogModel[];
  page: PageModel;
  prevPage: string;
  nextPage: string;
  pageNumbers: number[];

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.logService.getLogsFirstPage()
      .subscribe(response => {
        this.setLogsState(response);
    })
  }

  loadPreviousPage() {
    if (this.prevPage) {
      this.logService.getLogs(this.prevPage)
        .subscribe(response => {
          this.setLogsState(response);
        });
    }
  }

  loadNextPage() {
    if (this.nextPage) {
      this.logService.getLogs(this.nextPage)
        .subscribe(response => {
          this.setLogsState(response);
        });
    }
  }

  loadPageByIndex(index: number) {
    let uri = `http://localhost:8080/api/logs?page=${index}&size=10&sort=id,desc`;
    this.logService.getLogs(uri)
      .subscribe(response => {
        this.setLogsState(response);
      });
  }

  private setLogsState(response) {
    this.logs = [];
    for (let log of response['_embedded']['logs']) {
      let selfLink = log['_links']['self']['href'];

      let logModel = new LogModel(
        selfLink.substring(selfLink.lastIndexOf("/") + 1, selfLink.length),
        log.requestMethod,
        log.uri,
        log.statusCode,
        log.identity,
        log.timestamp,
        selfLink);
      this.logs.push(logModel);
    }

    this.page = response['page'];
    const links = response['_links'];

    if (links.prev) {
      this.prevPage = links.prev.href;
    } else {
      this.prevPage = null;
    }

    if (links.next) {
      this.nextPage = links.next.href;
    } else {
      this.nextPage = null;
    }

    this.pageNumbers = generatePageNumbers(this.page);
  }
}
