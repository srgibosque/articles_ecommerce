import { UserStoreService } from './../services/user-store.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleAppService implements HttpInterceptor {
  constructor(private userStore: UserStoreService){}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const token = this.userStore.getToken();
    if(token === undefined){
      return next.handle(request);

    } else {
      const modifiedRequest = request.clone({
        setHeaders: {
          'Authorization': token,
        },
      });
      // console.log(modifiedRequest.headers.get('authorization'));
      return next.handle(modifiedRequest);
    }
   
  }

}
