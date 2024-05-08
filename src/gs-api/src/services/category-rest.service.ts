/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CategoryDto } from '../models/category-dto';
import { delete7 } from '../fn/category-rest/delete-7';
import { Delete7$Params } from '../fn/category-rest/delete-7';
import { findAll5 } from '../fn/category-rest/find-all-5';
import { FindAll5$Params } from '../fn/category-rest/find-all-5';
import { findByCode2 } from '../fn/category-rest/find-by-code-2';
import { FindByCode2$Params } from '../fn/category-rest/find-by-code-2';
import { findById7 } from '../fn/category-rest/find-by-id-7';
import { FindById7$Params } from '../fn/category-rest/find-by-id-7';
import { save5 } from '../fn/category-rest/save-5';
import { Save5$Params } from '../fn/category-rest/save-5';

@Injectable({ providedIn: 'root' })
export class CategoryRestService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `save5()` */
  static readonly Save5Path = '/gestiondestock/v1/categories/create';

  /**
   * Cette methode permet d'enregister ou modifier une categorie.
   *
   * Enregister une categorie
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save5()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save5$Response(params: Save5$Params, context?: HttpContext): Observable<StrictHttpResponse<CategoryDto>> {
    return save5(this.http, this.rootUrl, params, context);
  }

  /**
   * Cette methode permet d'enregister ou modifier une categorie.
   *
   * Enregister une categorie
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save5$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save5(params: Save5$Params, context?: HttpContext): Observable<CategoryDto> {
    return this.save5$Response(params, context).pipe(
      map((r: StrictHttpResponse<CategoryDto>): CategoryDto => r.body)
    );
  }

  /** Path part for operation `findById7()` */
  static readonly FindById7Path = '/gestiondestock/v1/categories/{idCategory}';

  /**
   * Cette methode permet de chercher  une categorie par son Id.
   *
   * Rechercher une categorie par ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById7()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById7$Response(params: FindById7$Params, context?: HttpContext): Observable<StrictHttpResponse<CategoryDto>> {
    return findById7(this.http, this.rootUrl, params, context);
  }

  /**
   * Cette methode permet de chercher  une categorie par son Id.
   *
   * Rechercher une categorie par ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById7$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById7(params: FindById7$Params, context?: HttpContext): Observable<CategoryDto> {
    return this.findById7$Response(params, context).pipe(
      map((r: StrictHttpResponse<CategoryDto>): CategoryDto => r.body)
    );
  }

  /** Path part for operation `findByCode2()` */
  static readonly FindByCode2Path = '/gestiondestock/v1/categories/filter/{codeCategory}';

  /**
   * Cette methode permet de chercher  une categorie par son CODE.
   *
   * Rechercher une categorie par CODE
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByCode2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCode2$Response(params: FindByCode2$Params, context?: HttpContext): Observable<StrictHttpResponse<CategoryDto>> {
    return findByCode2(this.http, this.rootUrl, params, context);
  }

  /**
   * Cette methode permet de chercher  une categorie par son CODE.
   *
   * Rechercher une categorie par CODE
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByCode2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCode2(params: FindByCode2$Params, context?: HttpContext): Observable<CategoryDto> {
    return this.findByCode2$Response(params, context).pipe(
      map((r: StrictHttpResponse<CategoryDto>): CategoryDto => r.body)
    );
  }

  /** Path part for operation `findAll5()` */
  static readonly FindAll5Path = '/gestiondestock/v1/categories/all';

  /**
   * Cette methode permet de chercher  et renvoyer la liste des articles.
   *
   * Renvoi la liste des articles
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll5()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll5$Response(params?: FindAll5$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CategoryDto>>> {
    return findAll5(this.http, this.rootUrl, params, context);
  }

  /**
   * Cette methode permet de chercher  et renvoyer la liste des articles.
   *
   * Renvoi la liste des articles
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll5$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll5(params?: FindAll5$Params, context?: HttpContext): Observable<Array<CategoryDto>> {
    return this.findAll5$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CategoryDto>>): Array<CategoryDto> => r.body)
    );
  }

  /** Path part for operation `delete7()` */
  static readonly Delete7Path = '/gestiondestock/v1/categories/delete/{idCategory}';

  /**
   * Cette methode permet de supprimer une categorie par ID.
   *
   * Supprimer une categorie
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete7()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete7$Response(params: Delete7$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete7(this.http, this.rootUrl, params, context);
  }

  /**
   * Cette methode permet de supprimer une categorie par ID.
   *
   * Supprimer une categorie
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete7$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete7(params: Delete7$Params, context?: HttpContext): Observable<void> {
    return this.delete7$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
