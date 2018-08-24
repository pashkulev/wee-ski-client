import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CoursesInfoComponent} from './components/courses-info/courses-info.component';
import {CoursesRootComponent} from './components/courses-root/courses-root.component';
import {CourseDisciplineComponent} from './components/course-discipline/course-discipline.component';
import {CourseDetailsComponent} from './components/course-details/course-details.component';

const routes: Routes = [
  {path: "", component: CoursesRootComponent, children: [
      {path: "", redirectTo: "info", pathMatch: "full"},
      {path: "info", component: CoursesInfoComponent},
      {path: "discipline/:discipline", component: CourseDisciplineComponent},
      {path: ":id/details", component: CourseDetailsComponent}
    ], runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule {}
