import { Component } from '@angular/core';
import {AdminUserService} from '../../services/admin-user.service';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent {

  collection: string;
  entityId: string;

  constructor(private adminUserService: AdminUserService,
              private toastrService: ToastrService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.collection = this.activatedRoute.snapshot.params['collection'];
    this.entityId = this.activatedRoute.snapshot.params['id'];
  }

  collectionToSingular() {
    return this.collection.substring(0, this.collection.length - 1);
  }

  deleteUser() {
    let url = `http://localhost:8080/api/${this.collection}/${this.entityId}`;
    this.adminUserService.deleteUser(url)
      .subscribe(() => {
        this.toastrService.info("User Deleted!", "Info");
        this.router.navigate(['/admin/users']);
      });
  }
}
