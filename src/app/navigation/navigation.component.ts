import { Component, OnInit } from '@angular/core';
import {AuthenticatedUserModel} from '../authentication/models/AuthenticatedUserModel';
import {AuthenticationService} from '../authentication/authentication.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  animations: [

  ]
})
export class NavigationComponent implements OnInit {

  currentUser: AuthenticatedUserModel;

  constructor(public authService: AuthenticationService,
              private toastrService: ToastrService,
              private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem("currentUser")) {
      this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    }
  }

  get username() : string {
    return JSON.parse(localStorage.getItem("currentUser")).username;
  }

  get image() : string {
    const imageName = JSON.parse(localStorage.getItem("currentUser")).profilePicture;
    if (imageName) {
      return "http://localhost:8000/users/profilePictures/" + imageName;
    }
    return null;
  }

  logout() {
    this.authService.logout();
    this.toastrService.success("Logged Out", "Success");
    this.router.navigate(["/"]);
  }

}
