import { Component, OnInit } from '@angular/core';
import { LogService } from '../../services/log.service';
import { LogModel } from '../../models/log.model';
import { PageModel } from '../../../pagination/models/page.model';
import { generatePageNumbers } from '../../../pagination/utils/PageNumbersGenerator';

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
  ascending: boolean;
  size: number;

  constructor(private logService: LogService) {
    this.ascending = false;
    this.size = 10;
  }

  ngOnInit() {
    this.logService.getLogsFirstPage()
      .subscribe(response => {
        this.setLogsState(response);
    })
  }

  loadPreviousPage() {
    if (this.prevPage) {
      this.logService.getLogsByUrl(this.prevPage)
        .subscribe(response => {
          this.setLogsState(response);
        });
    }
  }

  loadNextPage() {
    if (this.nextPage) {
      this.logService.getLogsByUrl(this.nextPage)
        .subscribe(response => {
          this.setLogsState(response);
        });
    }
  }

  loadPageByIndex(index: number) {
    this.logService.getLogsByParameters(index, this.size, this.ascending)
      .subscribe(response => {
        this.setLogsState(response);
      });
  }

  hasNextTenResults() : boolean {
    return Math.floor(this.page.number / 10) * 10 + 10 < this.page.totalPages;
  }

  loadNextTenResults() {
    let pageNumber = Math.floor((this.page.number + 10) / 10) * 10;
    this.loadPageByIndex(pageNumber);
  }

  hasPreviousTenResults() : boolean {
    return Math.floor(this.page.number / 10) > 0;
  }

  loadPreviousTenResults() {
    let pageNumber = Math.floor((this.page.number - 10) / 10) * 10;
    this.loadPageByIndex(pageNumber);
  }

  toggleOrdering() {
    this.ascending = !this.ascending;
    this.loadPageByIndex(this.page.number);
  }

  onSizeChanged(size: number) {
    this.size = size;
    this.loadPageByIndex(0);
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
