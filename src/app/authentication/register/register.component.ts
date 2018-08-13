import {Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpEventType} from '@angular/common/http';
import {Router} from '@angular/router';

import {AuthenticationService} from '../authentication.service';
import countries from '../../data/countries';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class RegisterComponent {

  registerForm: FormGroup;
  countries: string[];
  passwordHidden: boolean;
  confirmPasswordHidden: boolean;
  selectedImage: File;
  uploadProgress: number;

  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
    this.initForm();
    this.countries = countries.map(country => country.name);
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
      return;
    }
    console.log(this.registerForm.value);
  }

  onFileChange(event) {
    this.selectedImage = <File>event.target.files[0];
    console.log(this.selectedImage);
  }

  onUpload() {
    const formData = new FormData();
    formData.append("image", this.selectedImage, this.selectedImage.name);
    this.authenticationService.uploadImage(formData)
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round(event.loaded / event.total * 100);
        } else if (event.type === HttpEventType.Response) {
          setTimeout(() => this.router.navigate(["/"]), 2000);
        }
    });
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
