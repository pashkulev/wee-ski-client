import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {AdminUserModel} from '../../models/admin-user.model';
import {AuthoritiesDataModel} from '../../models/authorities-data.model';

@Component({
  selector: 'app-set-authority',
  templateUrl: './set-authority.component.html',
  styleUrls: ['./set-authority.component.css']
})
export class SetAuthorityComponent implements OnInit  {

  @Input() user: AdminUserModel;
  @Output() authorityData = new EventEmitter<AuthoritiesDataModel>();
  availableAuthorities: string[];
  authorityForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.availableAuthorities = ['ROLE_USER', 'ROLE_MODERATOR', 'ROLE_ADMIN'];
    this.authorityForm = this.formBuilder.group({
      authorities: this.buildAuthorities()
    });
  }

  get authorities() : FormArray {
    return <FormArray>this.authorityForm.get("authorities");
  }

  setAuthorities() {
    let formAuthorities = this.authorityForm.value.authorities;
    let selectedAuthorities = ['ROLE_USER'];

    if (formAuthorities[0]) {
      selectedAuthorities.push(this.availableAuthorities[1]);
    }
    if (formAuthorities[1]) {
      selectedAuthorities.push(this.availableAuthorities[2]);
    }

    const authoritiesDataModel: AuthoritiesDataModel = new AuthoritiesDataModel(this.user.id, selectedAuthorities);
    this.authorityData.emit(authoritiesDataModel);
  }

  private buildAuthorities() : FormArray {
    const authoritiesArray = this.availableAuthorities.map(authority => {
      return this.formBuilder.control({
        value: this.user.authorities.includes(authority),
        disabled: authority === "ROLE_USER"
      });
    });

    return this.formBuilder.array(authoritiesArray);
  }
}
