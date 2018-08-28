import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './modules/routing/app-routing.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { UsersModule } from './modules/users/users.module';
import { CoursesModule } from './modules/courses/courses.module';
import { AdminModule } from './modules/admin/admin.module';
import { PipesModule } from './core/pipes/pipes.module';
import { SharedModule } from './modules/shared/shared.module';

import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { AdminGuard} from './core/guards/admin.guard';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MaterialModule,
    PipesModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    AuthenticationModule,
    UsersModule,
    CoursesModule,
    AdminModule
  ],
  providers: [
    AdminGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
