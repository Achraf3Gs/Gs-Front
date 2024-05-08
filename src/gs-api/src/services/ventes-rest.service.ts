/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { delete$ } from '../fn/ventes-rest/delete';
import { Delete$Params } from '../fn/ventes-rest/delete';
import { findAll } from '../fn/ventes-rest/find-all';
import { FindAll$Params } from '../fn/ventes-rest/find-all';
import { findByCode } from '../fn/ventes-rest/find-by-code';
import { FindByCode$Params } from '../fn/ventes-rest/find-by-code';
import { findById } from '../fn/ventes-rest/find-by-id';
import { FindById$Params } from '../fn/ventes-rest/find-by-id';
import { save } from '../fn/ventes-rest/save';
import { Save$Params } from '../fn/ventes-rest/save';
import { VentesDto } from '../models/ventes-dto';

@Injectable({ providedIn: 'root' })
export class VentesRestService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `save()` */
  static readonly SavePath = '/gestiondestock/v1/ventes/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save$Response(params: Save$Params, context?: HttpContext): Observable<StrictHttpResponse<VentesDto>> {
    return save(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save(params: Save$Params, context?: HttpContext): Observable<VentesDto> {
    return this.save$Response(params, context).pipe(
      map((r: StrictHttpResponse<VentesDto>): VentesDto => r.body)
    );
  }

  /** Path part for operation `findById()` */
  static readonly FindByIdPath = '/gestiondestock/v1/ventes/{idVente}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById$Response(params: FindById$Params, context?: HttpContext): Observable<StrictHttpResponse<VentesDto>> {
    return findById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById(params: FindById$Params, context?: HttpContext): Observable<VentesDto> {
    return this.findById$Response(params, context).pipe(
      map((r: StrictHttpResponse<VentesDto>): VentesDto => r.body)
    );
  }

  /** Path part for operation `findByCode()` */
  static readonly FindByCodePath = '/gestiondestock/v1/ventes/{codeVente}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCode$Response(params: FindByCode$Params, context?: HttpContext): Observable<StrictHttpResponse<VentesDto>> {
    return findByCode(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCode(params: FindByCode$Params, context?: HttpContext): Observable<VentesDto> {
    return this.findByCode$Response(params, context).pipe(
      map((r: StrictHttpResponse<VentesDto>): VentesDto => r.body)
    );
  }

  /** Path part for operation `findAll()` */
  static readonly FindAllPath = '/gestiondestock/v1/ventes/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll$Response(params?: FindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<VentesDto>>> {
    return findAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll(params?: FindAll$Params, context?: HttpContext): Observable<Array<VentesDto>> {
    return this.findAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<VentesDto>>): Array<VentesDto> => r.body)
    );
  }

  /** Path part for operation `delete()` */
  static readonly DeletePath = '/gestiondestock/v1/ventes/delete/{idVente}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete$Response(params: Delete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete$(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete(params: Delete$Params, context?: HttpContext): Observable<void> {
    return this.delete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
