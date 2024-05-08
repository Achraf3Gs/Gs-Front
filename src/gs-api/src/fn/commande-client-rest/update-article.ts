/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CommandeClientDto } from '../../models/commande-client-dto';

export interface UpdateArticle$Params {
  idCommande: number;
  idLigneCommande: number;
  idArticle: number;
}

export function updateArticle(http: HttpClient, rootUrl: string, params: UpdateArticle$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeClientDto>> {
  const rb = new RequestBuilder(rootUrl, updateArticle.PATH, 'patch');
  if (params) {
    rb.path('idCommande', params.idCommande, {});
    rb.path('idLigneCommande', params.idLigneCommande, {});
    rb.path('idArticle', params.idArticle, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CommandeClientDto>;
    })
  );
}

updateArticle.PATH = '/gestiondestock/v1/commandeFournisseur/update/article/{idCommande}/{idLigneCommande}/{idArticle}';
