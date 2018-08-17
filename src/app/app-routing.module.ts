import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {AboutComponent} from './about/about.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoginComponent} from './authentication/login/login.component';
import {RegisterComponent} from './authentication/register/register.component';
import {CoursesModule} from './courses/courses.module';
import {AdminModule} from './admin/admin.module';
import {AdminHomeComponent} from './admin/admin-home/admin-home.component';
import {LogsComponent} from './admin/logs/logs.component';
import {AdminResortsComponent} from './admin/admin-resorts/admin-resorts.component';
import {AdminUsersComponent} from './admin/admin-users/admin-users.component';
import {AdminCoursesComponent} from './admin/admin-courses/admin-courses.component';
import {AdminGatheringsComponent} from './admin/admin-gatherings/admin-gatherings.component';
import {AdminComponent} from './admin/admin/admin.component';

const routes: Routes = [
  {path: "", pathMatch: "full", component: WelcomeComponent},
  {path: "about", component: AboutComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "courses", loadChildren: () => CoursesModule},
  {path: "admin", component: AdminComponent, children: [
      {path: "", redirectTo: "home", pathMatch: "full"},
      {path: "home", component: AdminHomeComponent},
      {path: "users", component: AdminUsersComponent},
      {path: "courses", component: AdminCoursesComponent},
      {path: "gatherings", component: AdminGatheringsComponent},
      {path: "resorts", component: AdminResortsComponent},
      {path: "logs", component: LogsComponent}
    ]},
  {path: "**", component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
