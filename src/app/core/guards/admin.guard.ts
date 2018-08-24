import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import {AuthenticationService} from '../../modules/authentication/services/authentication.service';



@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    private authService : AuthenticationService,
    private router : Router
  ) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
    if (this.authService.hasRole('ROLE_ADMIN')) {
      return true;
    }

    this.router.navigate(["/unauthorized"]);
    return false;
  }
}
