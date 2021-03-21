import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }
  
  handleError(error: HttpErrorResponse) {
    return throwError(error)
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    const clone = req.clone({
      headers: headers
    })

    return next.handle(clone).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }


}
