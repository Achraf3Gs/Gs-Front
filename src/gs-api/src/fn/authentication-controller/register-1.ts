/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AuthenticationRequest } from '../../models/authentication-request';
import { AuthenticationResponse } from '../../models/authentication-response';

export interface Register1$Params {
      body: AuthenticationRequest
}

export function register1(http: HttpClient, rootUrl: string, params: Register1$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthenticationResponse>> {
  const rb = new RequestBuilder(rootUrl, register1.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AuthenticationResponse>;
    })
  );
}

register1.PATH = '/api/v1/auth/authenticate';
