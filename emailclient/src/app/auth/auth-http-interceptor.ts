import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, filter, tap } from "rxjs";

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    const modifiedReq = req.clone({
      withCredentials: true
    })
    console.log(req)

    console.log(modifiedReq)
    return next.handle(modifiedReq)
    .pipe(
      filter(
        val => val.type === HttpEventType.Response
      ),

      tap(value => {


        console.log(value);
      })
    )

  }





}
