import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {AuthenticatedUserModel} from '../authentication/models/AuthenticatedUserModel';

@Injectable()
export class TokenInterceptor implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser && currentUser.token) {
      req = req.clone({
        setHeaders: {
          "Authorization": "Bearer " + currentUser.token,
        }
      });
    }

    return next.handle(req)
      .pipe(tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && event.body && event.body.accessToken) {
          this.saveToken(event.body);
        }
      }));
  }

  private saveToken(data) {
    let username = data.user.firstName || "";
    username += data.user.lastName ? " " + data.user.lastName : "";
    username = username.trim();

    if (!username) {
      username = data.user.email;
    }

    let currentUser: AuthenticatedUserModel =
      new AuthenticatedUserModel(
        username,
        data.accessToken,
        data.user.profilePictureUrl,
        data.user.authorities.map(a => a.authority));
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }
}
