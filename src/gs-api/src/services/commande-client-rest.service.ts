/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CommandeClientDto } from '../models/commande-client-dto';
import { CommandeFournisseurDto } from '../models/commande-fournisseur-dto';
import { delete5 } from '../fn/commande-client-rest/delete-5';
import { Delete5$Params } from '../fn/commande-client-rest/delete-5';
import { deleteArticle } from '../fn/commande-client-rest/delete-article';
import { DeleteArticle$Params } from '../fn/commande-client-rest/delete-article';
import { findAll41$Any } from '../fn/commande-client-rest/find-all-41-any';
import { FindAll41$Any$Params } from '../fn/commande-client-rest/find-all-41-any';
import { findAll41$Json } from '../fn/commande-client-rest/find-all-41-json';
import { FindAll41$Json$Params } from '../fn/commande-client-rest/find-all-41-json';
import { findByCode1 } from '../fn/commande-client-rest/find-by-code-1';
import { FindByCode1$Params } from '../fn/commande-client-rest/find-by-code-1';
import { findById5 } from '../fn/commande-client-rest/find-by-id-5';
import { FindById5$Params } from '../fn/commande-client-rest/find-by-id-5';
import { save41$Any } from '../fn/commande-client-rest/save-41-any';
import { Save41$Any$Params } from '../fn/commande-client-rest/save-41-any';
import { save41$Json } from '../fn/commande-client-rest/save-41-json';
import { Save41$Json$Params } from '../fn/commande-client-rest/save-41-json';
import { updateArticle } from '../fn/commande-client-rest/update-article';
import { UpdateArticle$Params } from '../fn/commande-client-rest/update-article';
import { updateClient } from '../fn/commande-client-rest/update-client';
import { UpdateClient$Params } from '../fn/commande-client-rest/update-client';
import { updateEtatCommande } from '../fn/commande-client-rest/update-etat-commande';
import { UpdateEtatCommande$Params } from '../fn/commande-client-rest/update-etat-commande';
import { updateQuantityCommande } from '../fn/commande-client-rest/update-quantity-commande';
import { UpdateQuantityCommande$Params } from '../fn/commande-client-rest/update-quantity-commande';

@Injectable({ providedIn: 'root' })
export class CommandeClientRestService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `save41()` */
  static readonly Save41Path = '/gestiondestock/v1/commandeFournisseur/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save41$Any()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save41$Any$Response(params: Save41$Any$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeClientDto>> {
    return save41$Any(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save41$Any$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save41$Any(params: Save41$Any$Params, context?: HttpContext): Observable<CommandeClientDto> {
    return this.save41$Any$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeClientDto>): CommandeClientDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save41$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save41$Json$Response(params: Save41$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeFournisseurDto>> {
    return save41$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save41$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save41$Json(params: Save41$Json$Params, context?: HttpContext): Observable<CommandeFournisseurDto> {
    return this.save41$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeFournisseurDto>): CommandeFournisseurDto => r.body)
    );
  }

  /** Path part for operation `updateQuantityCommande()` */
  static readonly UpdateQuantityCommandePath = '/gestiondestock/v1/commandeFournisseur/update/quantite/{idCommande}/{idLigneCommande}/{quantite}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateQuantityCommande()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateQuantityCommande$Response(params: UpdateQuantityCommande$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeClientDto>> {
    return updateQuantityCommande(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateQuantityCommande$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateQuantityCommande(params: UpdateQuantityCommande$Params, context?: HttpContext): Observable<CommandeClientDto> {
    return this.updateQuantityCommande$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeClientDto>): CommandeClientDto => r.body)
    );
  }

  /** Path part for operation `updateEtatCommande()` */
  static readonly UpdateEtatCommandePath = '/gestiondestock/v1/commandeFournisseur/update/etat/{idCommande}/{etatCommande}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateEtatCommande()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateEtatCommande$Response(params: UpdateEtatCommande$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeClientDto>> {
    return updateEtatCommande(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateEtatCommande$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateEtatCommande(params: UpdateEtatCommande$Params, context?: HttpContext): Observable<CommandeClientDto> {
    return this.updateEtatCommande$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeClientDto>): CommandeClientDto => r.body)
    );
  }

  /** Path part for operation `updateClient()` */
  static readonly UpdateClientPath = '/gestiondestock/v1/commandeFournisseur/update/client/{idCommande}/{idClient}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateClient()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateClient$Response(params: UpdateClient$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeClientDto>> {
    return updateClient(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateClient$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateClient(params: UpdateClient$Params, context?: HttpContext): Observable<CommandeClientDto> {
    return this.updateClient$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeClientDto>): CommandeClientDto => r.body)
    );
  }

  /** Path part for operation `updateArticle()` */
  static readonly UpdateArticlePath = '/gestiondestock/v1/commandeFournisseur/update/article/{idCommande}/{idLigneCommande}/{idArticle}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateArticle()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateArticle$Response(params: UpdateArticle$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeClientDto>> {
    return updateArticle(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateArticle$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateArticle(params: UpdateArticle$Params, context?: HttpContext): Observable<CommandeClientDto> {
    return this.updateArticle$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeClientDto>): CommandeClientDto => r.body)
    );
  }

  /** Path part for operation `findById5()` */
  static readonly FindById5Path = '/gestiondestock/v1/commandeFournisseur/{idCommandeClient}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById5()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById5$Response(params?: FindById5$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeClientDto>> {
    return findById5(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById5$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById5(params?: FindById5$Params, context?: HttpContext): Observable<CommandeClientDto> {
    return this.findById5$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeClientDto>): CommandeClientDto => r.body)
    );
  }

  /** Path part for operation `findByCode1()` */
  static readonly FindByCode1Path = '/gestiondestock/v1/commandeFournisseur/{codeCommandeClient}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByCode1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCode1$Response(params?: FindByCode1$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeClientDto>> {
    return findByCode1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByCode1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCode1(params?: FindByCode1$Params, context?: HttpContext): Observable<CommandeClientDto> {
    return this.findByCode1$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeClientDto>): CommandeClientDto => r.body)
    );
  }

  /** Path part for operation `findAll41()` */
  static readonly FindAll41Path = '/gestiondestock/v1/commandeFournisseur/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll41$Any()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll41$Any$Response(params?: FindAll41$Any$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CommandeClientDto>>> {
    return findAll41$Any(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll41$Any$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll41$Any(params?: FindAll41$Any$Params, context?: HttpContext): Observable<Array<CommandeClientDto>> {
    return this.findAll41$Any$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CommandeClientDto>>): Array<CommandeClientDto> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll41$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll41$Json$Response(params?: FindAll41$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CommandeFournisseurDto>>> {
    return findAll41$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll41$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll41$Json(params?: FindAll41$Json$Params, context?: HttpContext): Observable<Array<CommandeFournisseurDto>> {
    return this.findAll41$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CommandeFournisseurDto>>): Array<CommandeFournisseurDto> => r.body)
    );
  }

  /** Path part for operation `delete5()` */
  static readonly Delete5Path = '/gestiondestock/v1/commandeFournisseur/delete/{idCommandeClient}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete5()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete5$Response(params: Delete5$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete5(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete5$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete5(params: Delete5$Params, context?: HttpContext): Observable<void> {
    return this.delete5$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `deleteArticle()` */
  static readonly DeleteArticlePath = '/gestiondestock/v1/commandeFournisseur/delete/article/{idCommande}/{idLigneCommande}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteArticle()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteArticle$Response(params: DeleteArticle$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeClientDto>> {
    return deleteArticle(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteArticle$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteArticle(params: DeleteArticle$Params, context?: HttpContext): Observable<CommandeClientDto> {
    return this.deleteArticle$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeClientDto>): CommandeClientDto => r.body)
    );
  }

}
