/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ArticleDto } from '../../models/article-dto';

export interface Save6$Params {
      body: ArticleDto
}

export function save6(http: HttpClient, rootUrl: string, params: Save6$Params, context?: HttpContext): Observable<StrictHttpResponse<ArticleDto>> {
  const rb = new RequestBuilder(rootUrl, save6.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ArticleDto>;
    })
  );
}

save6.PATH = '/gestiondestock/v1/articles/create';
