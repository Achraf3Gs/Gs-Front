/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CommandeClientDto } from '../../models/commande-client-dto';

export interface DeleteArticle$Params {
  idCommande: number;
  idLigneCommande: number;
}

export function deleteArticle(http: HttpClient, rootUrl: string, params: DeleteArticle$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeClientDto>> {
  const rb = new RequestBuilder(rootUrl, deleteArticle.PATH, 'delete');
  if (params) {
    rb.path('idCommande', params.idCommande, {});
    rb.path('idLigneCommande', params.idLigneCommande, {});
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

deleteArticle.PATH = '/gestiondestock/v1/commandeFournisseur/delete/article/{idCommande}/{idLigneCommande}';
