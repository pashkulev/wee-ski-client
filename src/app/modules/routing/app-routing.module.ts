import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from '../shared/components/welcome/welcome.component';
import {AboutComponent} from '../shared/components/about/about.component';
import {NotFoundComponent} from '../shared/components/not-found/not-found.component';
import {LoginComponent} from '../authentication/components/login/login.component';
import {RegisterComponent} from '../authentication/components/register/register.component';
import {CoursesModule} from '../courses/courses.module';
import {AdminModule} from '../admin/admin.module';
import {AdminGuard} from '../../core/guards/admin.guard';
import {UnauthorizedComponent} from '../shared/components/unauthorized/unauthorized.component';
import {UsersModule} from '../users/users.module';

const routes: Routes = [
  {path: "", pathMatch: "full", component: WelcomeComponent},
  {path: "about", component: AboutComponent},
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "logout", redirectTo: "/"},
  {path: "users", loadChildren: () => UsersModule},
  {path: "courses", loadChildren: () => CoursesModule},
  {path: "admin", loadChildren: () => AdminModule, canActivate: [AdminGuard]},
  {path: "unauthorized", component: UnauthorizedComponent},
  {path: "**", component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
