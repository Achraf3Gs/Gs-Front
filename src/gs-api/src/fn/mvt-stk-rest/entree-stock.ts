/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MvtStkDto } from '../../models/mvt-stk-dto';

export interface EntreeStock$Params {
      body: MvtStkDto
}

export function entreeStock(http: HttpClient, rootUrl: string, params: EntreeStock$Params, context?: HttpContext): Observable<StrictHttpResponse<MvtStkDto>> {
  const rb = new RequestBuilder(rootUrl, entreeStock.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<MvtStkDto>;
    })
  );
}

entreeStock.PATH = '/mvtStk/entree';
