import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {AboutComponent} from './about/about.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoginComponent} from './authentication/login/login.component';
import {RegisterComponent} from './authentication/register/register.component';
import {CoursesModule} from './courses/courses.module';

const routes: Routes = [
  {path: "", pathMatch: "full", component: WelcomeComponent},
  {path: "about", component: AboutComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "courses", loadChildren: () => CoursesModule},
  {path: "**", component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
