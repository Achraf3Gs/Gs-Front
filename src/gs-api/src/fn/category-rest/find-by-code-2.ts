/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CategoryDto } from '../../models/category-dto';

export interface FindByCode2$Params {
  codeCategory: string;
}

export function findByCode2(http: HttpClient, rootUrl: string, params: FindByCode2$Params, context?: HttpContext): Observable<StrictHttpResponse<CategoryDto>> {
  const rb = new RequestBuilder(rootUrl, findByCode2.PATH, 'get');
  if (params) {
    rb.path('codeCategory', params.codeCategory, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CategoryDto>;
    })
  );
}

findByCode2.PATH = '/gestiondestock/v1/categories/filter/{codeCategory}';
