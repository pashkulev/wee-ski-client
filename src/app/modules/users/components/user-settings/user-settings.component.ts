import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../authentication/services/authentication.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import countries from '../../../shared/data/countries';
import {HttpEventType} from '@angular/common/http';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {


  settingsForm: FormGroup;
  countries: string[];
  oldPasswordHidden: boolean;
  passwordHidden: boolean;
  confirmPasswordHidden: boolean;
  selectedImage: File;
  uploadProgress: number;

  constructor(private authenticationService: AuthenticationService,
              private userService: UserService,
              private toastrService: ToastrService,
              private router: Router) {
    this.initForm();
    this.countries = countries.map(country => country.name).sort();
    this.passwordHidden = true;
    this.confirmPasswordHidden = true;
    this.selectedImage = null;
    this.uploadProgress = -1;
  }

  ngOnInit(): void {
  }

  get firstName() {
    return this.settingsForm.get("firstName");
  }

  resetFirstName() {
    this.settingsForm.controls['firstName'].setValue("");
  }

  get lastName() {
    return this.settingsForm.get("lastName");
  }

  resetLastName() {
    this.settingsForm.controls['lastName'].setValue("");
  }

  get email() {
    return this.settingsForm.get("email");
  }

  resetEmail() {
    this.settingsForm.controls['email'].setValue("");
  }

  get country() {
    return this.settingsForm.get("country");
  }

  get password() {
    return this.settingsForm.get("password");
  }

  resetPassword() {
    this.settingsForm.controls['password'].setValue("");
  }

  get confirmPassword() {
    return this.settingsForm.get("confirmPassword");
  }

  resetConfirmPassword() {
    this.settingsForm.controls['confirmPassword'].setValue("");
  }

  register() {
    if (this.settingsForm.invalid) {
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
    this.settingsForm = new FormGroup({
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
