/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CommandeClientDto } from '../../models/commande-client-dto';

export interface UpdateEtatCommande$Params {
  idCommande: number;
  etatCommande: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
}

export function updateEtatCommande(http: HttpClient, rootUrl: string, params: UpdateEtatCommande$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeClientDto>> {
  const rb = new RequestBuilder(rootUrl, updateEtatCommande.PATH, 'patch');
  if (params) {
    rb.path('idCommande', params.idCommande, {});
    rb.path('etatCommande', params.etatCommande, {});
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

updateEtatCommande.PATH = '/gestiondestock/v1/commandeFournisseur/update/etat/{idCommande}/{etatCommande}';
