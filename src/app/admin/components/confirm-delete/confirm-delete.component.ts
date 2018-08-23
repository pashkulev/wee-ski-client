import { Component } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedDeleteService} from '../../services/shared-delete.service';

const BASE_URL = "http://localhost:8080/api/";

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent {

  collection: string;
  entityId: string;

  constructor(private sharedDeleteService: SharedDeleteService,
              private toastrService: ToastrService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.collection = this.activatedRoute.snapshot.params['collection'];
    this.entityId = this.activatedRoute.snapshot.params['id'];
  }

  collectionToSingular() {
    return this.collection.substring(0, this.collection.length - 1);
  }

  delete() {
    let url = `${BASE_URL}${this.collection}/${this.entityId}`;
    this.sharedDeleteService.deleteResource(url)
      .subscribe(() => {
        this.toastrService.success(`${this.toTitleCase(this.collection)} deleted!`, "Success");
        this.router.navigate([`/admin/${this.collection}`]);
      });
  }


  private toTitleCase(collectionName) {
    return collectionName[0].toUpperCase() + collectionName.substring(1, collectionName.length - 1);
  }
}
