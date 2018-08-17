import { Component, OnInit } from '@angular/core';
import {UserModel} from '../authentication/models/UserModel';
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

  currentUser: UserModel;

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
    return "../../assets/images/profilePictures/"
      + JSON.parse(localStorage.getItem("currentUser")).imageUrl;
  }

  logout() {
    this.authService.logout();
    this.toastrService.success("Logged Out", "Success");
    this.router.navigate(["/"]);
  }

}
