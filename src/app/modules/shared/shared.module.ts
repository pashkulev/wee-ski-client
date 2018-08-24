import {NgModule} from '@angular/core';
import {AboutComponent} from './components/about/about.component';
import {FooterComponent} from './components/footer/footer.component';
import {Navigation} from 'selenium-webdriver';
import {NavigationComponent} from './components/navigation/navigation.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';

@NgModule({
  declarations: [
    AboutComponent,
    FooterComponent,
    NavigationComponent,
    NotFoundComponent,
    WelcomeComponent,
    UnauthorizedComponent
  ],
  imports:  [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavigationComponent,
    FooterComponent
  ]
})
export class SharedModule {

}
