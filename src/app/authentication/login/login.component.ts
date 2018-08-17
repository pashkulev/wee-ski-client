import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../authentication.service';
import {UserLoginModel} from '../models/UserLoginModel';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  passwordHidden: boolean;

  constructor(private authService: AuthenticationService,
              private toastrService: ToastrService,
              private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.pattern(/^([a-zA-Z\d]+[.\-_]?[a-zA-Z\d]+)+@([a-z]+\.)+[a-z]{2,4}$/)
      ]),
      password: new FormControl("", [
        Validators.required
      ])
    });
    this.passwordHidden = true;
  }

  get email() {
    return this.loginForm.get("email");
  }

  get password() {
    return this.loginForm.get("password");
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    let payload: UserLoginModel = new UserLoginModel(this.email.value, this.password.value);
    this.authService.login(payload)
      .subscribe(response => {
        console.log(response);
        this.toastrService.success("Successfully logged in!", "Success");
        this.router.navigate(["/"])
      });
  }
}
