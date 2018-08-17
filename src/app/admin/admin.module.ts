import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component';
import { LogsComponent } from './logs/logs.component';
import { RouterModule } from '@angular/router';
import { AdminCoursesComponent } from './admin-courses/admin-courses.component';
import { AdminResortsComponent } from './admin-resorts/admin-resorts.component';
import { AdminGatheringsComponent } from './admin-gatherings/admin-gatherings.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import {MaterialModule} from '../material';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminNavigationComponent,
    LogsComponent,
    AdminCoursesComponent,
    AdminResortsComponent,
    AdminGatheringsComponent,
    AdminUsersComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class AdminModule { }
