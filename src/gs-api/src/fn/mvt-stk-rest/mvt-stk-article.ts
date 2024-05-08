/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MvtStkDto } from '../../models/mvt-stk-dto';

export interface MvtStkArticle$Params {
  idArticle: number;
}

export function mvtStkArticle(http: HttpClient, rootUrl: string, params: MvtStkArticle$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MvtStkDto>>> {
  const rb = new RequestBuilder(rootUrl, mvtStkArticle.PATH, 'get');
  if (params) {
    rb.path('idArticle', params.idArticle, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<MvtStkDto>>;
    })
  );
}

mvtStkArticle.PATH = '/mvtStk/mvtstk/filter/article/{idArticle}';
