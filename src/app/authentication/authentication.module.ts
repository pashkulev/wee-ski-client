import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AuthenticationService } from './authentication.service';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    AuthenticationService
  ]
})
export class AuthenticationModule {}
