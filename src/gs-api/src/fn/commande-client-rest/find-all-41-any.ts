/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CommandeClientDto } from '../../models/commande-client-dto';

export interface FindAll41$Any$Params {
}

export function findAll41$Any(http: HttpClient, rootUrl: string, params?: FindAll41$Any$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CommandeClientDto>>> {
  const rb = new RequestBuilder(rootUrl, findAll41$Any.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<CommandeClientDto>>;
    })
  );
}

findAll41$Any.PATH = '/gestiondestock/v1/commandeFournisseur/all';
