/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CommandeClientDto } from '../../models/commande-client-dto';

export interface UpdateQuantityCommande$Params {
  idCommande: number;
  idLigneCommande: number;
}

export function updateQuantityCommande(http: HttpClient, rootUrl: string, params: UpdateQuantityCommande$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeClientDto>> {
  const rb = new RequestBuilder(rootUrl, updateQuantityCommande.PATH, 'patch');
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

updateQuantityCommande.PATH = '/gestiondestock/v1/commandeFournisseur/update/quantite/{idCommande}/{idLigneCommande}/{quantite}';
