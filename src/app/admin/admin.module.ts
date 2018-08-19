import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminNavigationComponent } from './components/admin-navigation/admin-navigation.component';
import { LogsComponent } from './components/logs/logs.component';
import { RouterModule } from '@angular/router';
import { AdminCoursesComponent } from './components/admin-courses/admin-courses.component';
import { AdminResortsComponent } from './components/admin-resorts/admin-resorts.component';
import { AdminGatheringsComponent } from './components/admin-gatherings/admin-gatherings.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import {MaterialModule} from '../material.module';
import { AdminComponent } from './components/admin/admin.component';
import { LogService } from './service/log.service';
import {AdminUserService} from './service/admin-user.service';
import {RoleService} from './service/role.service';
import { ConfirmDeleteComponent } from './components/confirm-delete/confirm-delete.component';

@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminNavigationComponent,
    LogsComponent,
    AdminCoursesComponent,
    AdminResortsComponent,
    AdminGatheringsComponent,
    AdminUsersComponent,
    AdminComponent,
    ConfirmDeleteComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  providers: [
    AdminUserService,
    RoleService,
    LogService
  ]
})
export class AdminModule { }
