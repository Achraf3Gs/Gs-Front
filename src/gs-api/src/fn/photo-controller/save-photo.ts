/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

export interface SavePhoto$Params {
  context: string;
  id: number;
  title: string;
  body?: {
    file: Blob;
  };
}

export function savePhoto(
  http: HttpClient,
  rootUrl: string,
  params: SavePhoto$Params,
  context?: HttpContext
): Observable<StrictHttpResponse<{}>> {
  const rb = new RequestBuilder(rootUrl, savePhoto.PATH, 'post');
  if (params) {
    rb.path('context', params.context, {});
    rb.path('id', params.id, {});
    rb.path('title', params.title, {});
    rb.body(params.body, 'application/json');
  }

  return http
    .request(rb.build({ responseType: 'blob', accept: '*/*', context }))
    .pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{}>;
      })
    );
}

savePhoto.PATH = '/gestiondestock/v1/save/{id}/{title}/{context}';
