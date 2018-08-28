import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import {UserService} from './services/user.service';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import {UsersRoutingModule} from './users-routing.module';

@NgModule({
  declarations: [
    UserSettingsComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    UsersRoutingModule
  ],
  providers: [
    UserService
  ]

})
export class UsersModule { }
