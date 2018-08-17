import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {ToastrService} from "ngx-toastr";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private toastrService: ToastrService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError((err: HttpErrorResponse) => {
      switch (err.status) {
        case 400:
          this.toastrService.error(err.error.message, "Error");
          break;
        case 401:
          this.toastrService.error(err.error ? err.error.message : err.statusText, "Error");
          break;
        case 409:
          this.toastrService.error(err.error.message, err.error.status);
          break;
        case 500:
          this.toastrService.error(err.error.message, err.error.status);

      }

      return throwError(err);
    }));
  }

}
