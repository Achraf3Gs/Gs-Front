/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ClientDto } from '../models/client-dto';
import { delete6 } from '../fn/client-rest/delete-6';
import { Delete6$Params } from '../fn/client-rest/delete-6';
import { findAll4 } from '../fn/client-rest/find-all-4';
import { FindAll4$Params } from '../fn/client-rest/find-all-4';
import { findById6 } from '../fn/client-rest/find-by-id-6';
import { FindById6$Params } from '../fn/client-rest/find-by-id-6';
import { save4 } from '../fn/client-rest/save-4';
import { Save4$Params } from '../fn/client-rest/save-4';

@Injectable({ providedIn: 'root' })
export class ClientRestService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `save4()` */
  static readonly Save4Path = '/gestiondestock/v1/clients/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save4()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save4$Response(params: Save4$Params, context?: HttpContext): Observable<StrictHttpResponse<ClientDto>> {
    return save4(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save4$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save4(params: Save4$Params, context?: HttpContext): Observable<ClientDto> {
    return this.save4$Response(params, context).pipe(
      map((r: StrictHttpResponse<ClientDto>): ClientDto => r.body)
    );
  }

  /** Path part for operation `findById6()` */
  static readonly FindById6Path = '/gestiondestock/v1/clients/{idClient}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById6()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById6$Response(params: FindById6$Params, context?: HttpContext): Observable<StrictHttpResponse<ClientDto>> {
    return findById6(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById6$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById6(params: FindById6$Params, context?: HttpContext): Observable<ClientDto> {
    return this.findById6$Response(params, context).pipe(
      map((r: StrictHttpResponse<ClientDto>): ClientDto => r.body)
    );
  }

  /** Path part for operation `findAll4()` */
  static readonly FindAll4Path = '/gestiondestock/v1/clients/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll4()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll4$Response(params?: FindAll4$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ClientDto>>> {
    return findAll4(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll4(params?: FindAll4$Params, context?: HttpContext): Observable<Array<ClientDto>> {
    return this.findAll4$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ClientDto>>): Array<ClientDto> => r.body)
    );
  }

  /** Path part for operation `delete6()` */
  static readonly Delete6Path = '/gestiondestock/v1/clients/delete/{idClient}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete6()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete6$Response(params: Delete6$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete6(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete6$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete6(params: Delete6$Params, context?: HttpContext): Observable<void> {
    return this.delete6$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
