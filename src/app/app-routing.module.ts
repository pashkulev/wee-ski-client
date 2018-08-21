import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {AboutComponent} from './about/about.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoginComponent} from './authentication/login/login.component';
import {RegisterComponent} from './authentication/register/register.component';
import {CoursesModule} from './courses/courses.module';
import {AdminModule} from './admin/admin.module';
import {AdminHomeComponent} from './admin/components/admin-home/admin-home.component';
import {LogsComponent} from './admin/components/logs/logs.component';
import {AdminResortsComponent} from './admin/components/admin-resorts/admin-resorts.component';
import {AdminUsersComponent} from './admin/components/admin-users/admin-users.component';
import {AdminCoursesComponent} from './admin/components/admin-courses/admin-courses.component';
import {AdminGatheringsComponent} from './admin/components/admin-gatherings/admin-gatherings.component';
import {AdminRootComponent} from './admin/components/admin-root/admin-root.component';
import {ConfirmDeleteComponent} from './admin/components/confirm-delete/confirm-delete.component';

const routes: Routes = [
  {path: "", pathMatch: "full", component: WelcomeComponent},
  {path: "about", component: AboutComponent},
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "logout", redirectTo: "/"},
  {path: "courses", loadChildren: () => CoursesModule},
  {path: "admin", component: AdminRootComponent, children: [
      {path: "", redirectTo: "home", pathMatch: "full"},
      {path: "home", component: AdminHomeComponent},
      {path: "users", component: AdminUsersComponent},
      {path: "courses", component: AdminCoursesComponent},
      {path: "gatherings", component: AdminGatheringsComponent},
      {path: "resorts", component: AdminResortsComponent},
      {path: "logs", component: LogsComponent},
      {path: ":collection/:id/delete", component: ConfirmDeleteComponent}
    ]},
  {path: "**", component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
