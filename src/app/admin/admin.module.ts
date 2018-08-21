import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminNavigationComponent } from './components/admin-navigation/admin-navigation.component';
import { LogsComponent } from './components/logs/logs.component';
import { AdminCoursesComponent } from './components/admin-courses/admin-courses.component';
import { AdminResortsComponent } from './components/admin-resorts/admin-resorts.component';
import { AdminGatheringsComponent } from './components/admin-gatherings/admin-gatherings.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminRootComponent } from './components/admin-root/admin-root.component';
import { ConfirmDeleteComponent } from './components/confirm-delete/confirm-delete.component';
import { SetAuthorityComponent } from './components/set-authority/set-authority.component';

import { LogService } from './services/log.service';
import { AdminUserService } from './services/admin-user.service';
import { RoleService } from './services/role.service';
import {PipesModule} from '../pipes/pipes.module';
import {PaginationModule} from '../pagination/pagination.module';

@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminNavigationComponent,
    LogsComponent,
    AdminCoursesComponent,
    AdminResortsComponent,
    AdminGatheringsComponent,
    AdminUsersComponent,
    AdminRootComponent,
    ConfirmDeleteComponent,
    SetAuthorityComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    PaginationModule,
    PipesModule.forRoot()
  ],
  providers: [
    AdminUserService,
    RoleService,
    LogService
  ]
})
export class AdminModule { }
