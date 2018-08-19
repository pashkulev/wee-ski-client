import { Component, OnInit } from '@angular/core';
import {PageModel} from '../../../shared/models/page.model';
import {AdminUserModel} from '../../models/admin-user.model';
import {AdminUserService} from '../../service/admin-user.service';
import {generatePageNumbers} from '../../../shared/utils/PageNumbersGenerator';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  adminUserModels: AdminUserModel[];
  page: PageModel;
  prevPage: string;
  nextPage: string;
  pageNumbers: number[];

  constructor(private adminUserService: AdminUserService,
              private toastrService: ToastrService) { }

  ngOnInit() {
    this.adminUserService.getUsersFirstPage()
      .subscribe(response => {
        this.setUsersState(response);
      })
  }

  loadPreviousPage() {
    if (this.prevPage) {
      this.adminUserService.getUsers(this.prevPage)
        .subscribe(response => {
          this.setUsersState(response);
        });
    }
  }

  loadNextPage() {
    if (this.nextPage) {
      this.adminUserService.getUsers(this.nextPage)
        .subscribe(response => {
          this.setUsersState(response);
        });
    }
  }

  loadPageByIndex(index: number) {
    let uri = `http://localhost:8080/api/users?page=${index}&size=10&sort=id,desc`;
    this.adminUserService.getUsers(uri)
      .subscribe(response => {
        this.setUsersState(response);
      });
  }

  private setUsersState(response) {
    this.adminUserModels = [];
    for (let user of response['_embedded']['users']) {
      let selfLink = user['_links']['self']['href'];
      let id = selfLink.substring(selfLink.lastIndexOf("/") + 1, selfLink.length);
      let authorities = user.roles.map(role => role.authority);

      let adminUserModel = new AdminUserModel(
        id,
        user.firstName,
        user.lastName,
        user.email,
        user.country,
        user.enabled === "true",
        selfLink,
        authorities);
      this.adminUserModels.push(adminUserModel);
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
