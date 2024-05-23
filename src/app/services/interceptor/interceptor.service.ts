import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Check if localStorage is available
    if (typeof localStorage !== 'undefined') {
      // Retrieve the access token from local storage
      const accessToken = localStorage.getItem('accessToken');
      console.log(`Interceptor: accessToken=${accessToken}`);

      // If access token exists, attach it to the request headers
        // If access token exists, attach it to the request headers
        if (accessToken) {
          // Remove backslashes and directly use the token value
          const tokenValue = accessToken.replace(/\"/g, ''); // Remove backslashes from token
  
          // Clone the request and append the authorization header
          const authReq = req.clone({
            setHeaders: {
              'Authorization': `Bearer ${tokenValue}` // Use token value directly
            }
          });
        console.log('Interceptor: Request with Authorization header', JSON.stringify(authReq));

        return next.handle(authReq);
      }
    }

    // If no access token exists or localStorage is not available, proceed with the original request
    console.log('Interceptor: No accessToken found, proceeding with original request');
    return next.handle(req);
  }
}
