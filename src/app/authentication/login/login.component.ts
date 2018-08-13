import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  passwordHidden: boolean;

  constructor() {
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
    console.log(this.loginForm.value);
  }
}
