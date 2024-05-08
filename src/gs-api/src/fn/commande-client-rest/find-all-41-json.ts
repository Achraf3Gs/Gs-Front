/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CommandeFournisseurDto } from '../../models/commande-fournisseur-dto';

export interface FindAll41$Json$Params {
}

export function findAll41$Json(http: HttpClient, rootUrl: string, params?: FindAll41$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CommandeFournisseurDto>>> {
  const rb = new RequestBuilder(rootUrl, findAll41$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<CommandeFournisseurDto>>;
    })
  );
}

findAll41$Json.PATH = '/gestiondestock/v1/commandeFournisseur/all';
