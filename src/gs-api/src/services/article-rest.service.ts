/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ArticleDto } from '../models/article-dto';
import { delete8 } from '../fn/article-rest/delete-8';
import { Delete8$Params } from '../fn/article-rest/delete-8';
import { findAll6 } from '../fn/article-rest/find-all-6';
import { FindAll6$Params } from '../fn/article-rest/find-all-6';
import { findByCodeArticle } from '../fn/article-rest/find-by-code-article';
import { FindByCodeArticle$Params } from '../fn/article-rest/find-by-code-article';
import { findById8 } from '../fn/article-rest/find-by-id-8';
import { FindById8$Params } from '../fn/article-rest/find-by-id-8';
import { save6 } from '../fn/article-rest/save-6';
import { Save6$Params } from '../fn/article-rest/save-6';

@Injectable({ providedIn: 'root' })
export class ArticleRestService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `save6()` */
  static readonly Save6Path = '/gestiondestock/v1/articles/create';

  /**
   * Cette methode permet d'enregister ou modifier un article.
   *
   * Enregister un article
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save6()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save6$Response(params: Save6$Params, context?: HttpContext): Observable<StrictHttpResponse<ArticleDto>> {
    return save6(this.http, this.rootUrl, params, context);
  }

  /**
   * Cette methode permet d'enregister ou modifier un article.
   *
   * Enregister un article
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save6$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save6(params: Save6$Params, context?: HttpContext): Observable<ArticleDto> {
    return this.save6$Response(params, context).pipe(
      map((r: StrictHttpResponse<ArticleDto>): ArticleDto => r.body)
    );
  }

  /** Path part for operation `findById8()` */
  static readonly FindById8Path = '/gestiondestock/v1/articles/{idArticle}';

  /**
   * Cette methode permet de chercher  un article par son Id.
   *
   * Rechercher un article par ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById8()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById8$Response(params: FindById8$Params, context?: HttpContext): Observable<StrictHttpResponse<ArticleDto>> {
    return findById8(this.http, this.rootUrl, params, context);
  }

  /**
   * Cette methode permet de chercher  un article par son Id.
   *
   * Rechercher un article par ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById8$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById8(params: FindById8$Params, context?: HttpContext): Observable<ArticleDto> {
    return this.findById8$Response(params, context).pipe(
      map((r: StrictHttpResponse<ArticleDto>): ArticleDto => r.body)
    );
  }

  /** Path part for operation `findByCodeArticle()` */
  static readonly FindByCodeArticlePath = '/gestiondestock/v1/articles/filter/{codeArticle}';

  /**
   * Cette methode permet de chercher  un article par son CODE.
   *
   * Rechercher un article par CODE
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByCodeArticle()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCodeArticle$Response(params: FindByCodeArticle$Params, context?: HttpContext): Observable<StrictHttpResponse<ArticleDto>> {
    return findByCodeArticle(this.http, this.rootUrl, params, context);
  }

  /**
   * Cette methode permet de chercher  un article par son CODE.
   *
   * Rechercher un article par CODE
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByCodeArticle$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCodeArticle(params: FindByCodeArticle$Params, context?: HttpContext): Observable<ArticleDto> {
    return this.findByCodeArticle$Response(params, context).pipe(
      map((r: StrictHttpResponse<ArticleDto>): ArticleDto => r.body)
    );
  }

  /** Path part for operation `findAll6()` */
  static readonly FindAll6Path = '/gestiondestock/v1/articles/all';

  /**
   * Cette methode permet de chercher  et renvoyer la liste des articles.
   *
   * Renvoi la liste des articles
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll6()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll6$Response(params?: FindAll6$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ArticleDto>>> {
    return findAll6(this.http, this.rootUrl, params, context);
  }

  /**
   * Cette methode permet de chercher  et renvoyer la liste des articles.
   *
   * Renvoi la liste des articles
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll6$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll6(params?: FindAll6$Params, context?: HttpContext): Observable<Array<ArticleDto>> {
    return this.findAll6$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ArticleDto>>): Array<ArticleDto> => r.body)
    );
  }

  /** Path part for operation `delete8()` */
  static readonly Delete8Path = '/gestiondestock/v1/articles/delete/{idArticle}';

  /**
   * Cette methode permet de supprimer un article par ID.
   *
   * Supprimer un article
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete8()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete8$Response(params: Delete8$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete8(this.http, this.rootUrl, params, context);
  }

  /**
   * Cette methode permet de supprimer un article par ID.
   *
   * Supprimer un article
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete8$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete8(params: Delete8$Params, context?: HttpContext): Observable<void> {
    return this.delete8$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
