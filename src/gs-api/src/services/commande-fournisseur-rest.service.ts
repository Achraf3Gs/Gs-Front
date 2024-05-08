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
import { delete4 } from '../fn/commande-fournisseur-rest/delete-4';
import { Delete4$Params } from '../fn/commande-fournisseur-rest/delete-4';
import { findAll41$Any } from '../fn/commande-client-rest/find-all-41-any';
import { FindAll41$Any$Params } from '../fn/commande-client-rest/find-all-41-any';
import { findAll41$Json } from '../fn/commande-client-rest/find-all-41-json';
import { FindAll41$Json$Params } from '../fn/commande-client-rest/find-all-41-json';
import { findById4 } from '../fn/commande-fournisseur-rest/find-by-id-4';
import { FindById4$Params } from '../fn/commande-fournisseur-rest/find-by-id-4';
import { save41$Any } from '../fn/commande-client-rest/save-41-any';
import { Save41$Any$Params } from '../fn/commande-client-rest/save-41-any';
import { save41$Json } from '../fn/commande-client-rest/save-41-json';
import { Save41$Json$Params } from '../fn/commande-client-rest/save-41-json';

@Injectable({ providedIn: 'root' })
export class CommandeFournisseurRestService extends BaseService {
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

  /** Path part for operation `findById4()` */
  static readonly FindById4Path = '/gestiondestock/v1/commandeFournisseur/{idCommandeFournisseur}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById4()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById4$Response(params: FindById4$Params, context?: HttpContext): Observable<StrictHttpResponse<CommandeFournisseurDto>> {
    return findById4(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById4(params: FindById4$Params, context?: HttpContext): Observable<CommandeFournisseurDto> {
    return this.findById4$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommandeFournisseurDto>): CommandeFournisseurDto => r.body)
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

  /** Path part for operation `delete4()` */
  static readonly Delete4Path = '/gestiondestock/v1/commandeFournisseur/delete/{idCommandeFournisseur}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete4()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete4$Response(params: Delete4$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete4(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete4(params: Delete4$Params, context?: HttpContext): Observable<void> {
    return this.delete4$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
