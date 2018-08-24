import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AdminRootComponent} from './components/admin-root/admin-root.component';
import {AdminHomeComponent} from './components/admin-home/admin-home.component';
import {AdminUsersComponent} from './components/admin-users/admin-users.component';
import {AdminCoursesComponent} from './components/admin-courses/admin-courses.component';
import {CourseCreateComponent} from './components/course-create/course-create.component';
import {CourseEditComponent} from './components/course-edit/course-edit.component';
import {AdminGatheringsComponent} from './components/admin-gatherings/admin-gatherings.component';
import {AdminResortsComponent} from './components/admin-resorts/admin-resorts.component';
import {LogsComponent} from './components/logs/logs.component';
import {ConfirmDeleteComponent} from './components/confirm-delete/confirm-delete.component';

const routes: Routes = [
  {path: "", component: AdminRootComponent, children: [
      {path: "", redirectTo: "home", pathMatch: "full"},
      {path: "home", component: AdminHomeComponent},
      {path: "users", component: AdminUsersComponent},
      {path: "courses", pathMatch: "full", component: AdminCoursesComponent},
      {path: "courses/create", component: CourseCreateComponent},
      {path: "courses/:id/edit", component: CourseEditComponent},
      {path: "gatherings", component: AdminGatheringsComponent},
      {path: "resorts", component: AdminResortsComponent},
      {path: "logs", component: LogsComponent},
      {path: ":collection/:id/delete", component: ConfirmDeleteComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
