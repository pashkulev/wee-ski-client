import {Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpEventType} from '@angular/common/http';
import {Router} from '@angular/router';

import {AuthenticationService} from '../authentication.service';
import countries from '../data/countries';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  // encapsulation: ViewEncapsulation.Emulated
})
export class RegisterComponent {

  registerForm: FormGroup;
  countries: string[];
  passwordHidden: boolean;
  confirmPasswordHidden: boolean;
  selectedImage: File;
  uploadProgress: number;

  constructor(private authenticationService: AuthenticationService,
              private toastrService: ToastrService,
              private router: Router) {
    this.initForm();
    this.countries = countries.map(country => country.name).sort();
    this.passwordHidden = true;
    this.confirmPasswordHidden = true;
    this.selectedImage = null;
    this.uploadProgress = -1;
  }

  get firstName() {
    return this.registerForm.get("firstName");
  }

  resetFirstName() {
    this.registerForm.controls['firstName'].setValue("");
  }

  get lastName() {
    return this.registerForm.get("lastName");
  }

  resetLastName() {
    this.registerForm.controls['lastName'].setValue("");
  }

  get email() {
    return this.registerForm.get("email");
  }

  resetEmail() {
    this.registerForm.controls['email'].setValue("");
  }

  get country() {
    return this.registerForm.get("country");
  }

  get password() {
    return this.registerForm.get("password");
  }

  resetPassword() {
    this.registerForm.controls['password'].setValue("");
  }

  get confirmPassword() {
    return this.registerForm.get("confirmPassword");
  }

  resetConfirmPassword() {
    this.registerForm.controls['confirmPassword'].setValue("");
  }

  register() {
    if (this.registerForm.invalid) {
      this.toastrService.info("Don't skip required fields!", "Oops");
      return;
    }

    if (this.password.value != this.confirmPassword.value) {
      this.toastrService.error("Passwords don't match!", "Error");
      return;
    }

    const formData = new FormData();
    formData.append("email", this.email.value);
    formData.append("password", this.password.value);
    formData.append("confirmPassword", this.confirmPassword.value);

    if (this.firstName.value) {
      formData.append("firstName", this.firstName.value);
    }

    if (this.lastName.value) {
      formData.append("lastName", this.lastName.value);
    }

    if (this.country.value) {
      formData.append("country", this.country.value);
    }

    if (this.selectedImage) {
      formData.append("image", this.selectedImage, this.selectedImage.name);
    }

    this.authenticationService.register(formData)
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round(event.loaded / event.total * 100);
        } else if (event.type === HttpEventType.Response) {
          this.toastrService.success("Registration successful!", "Success");
          setTimeout(() => this.router.navigate(["/login"]), 2000);
          console.log(event);
        }
      });
  }

  onFileChange(event) {
    this.selectedImage = <File>event.target.files[0];
  }

  private initForm() {
    this.registerForm = new FormGroup({
      firstName: new FormControl("", [
        Validators.pattern(/^[A-Z][a-z]+$/)
      ]),
      lastName: new FormControl("", [
        Validators.pattern(/^[A-Z][a-z]+(\s?[A-Z][a-z]+)?$/)
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern(/^([a-zA-Z\d]+[.\-_]?[a-zA-Z\d]+)+@([a-z]+\.)+[a-z]{2,4}$/)
      ]),
      country: new FormControl(""),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(4)
      ]),
      confirmPassword: new FormControl("", [
        Validators.required
      ])
    });
  }
}
