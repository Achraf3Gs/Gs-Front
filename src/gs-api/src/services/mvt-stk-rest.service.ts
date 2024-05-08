/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { correctionStockNeg } from '../fn/mvt-stk-rest/correction-stock-neg';
import { CorrectionStockNeg$Params } from '../fn/mvt-stk-rest/correction-stock-neg';
import { correctionStockPos } from '../fn/mvt-stk-rest/correction-stock-pos';
import { CorrectionStockPos$Params } from '../fn/mvt-stk-rest/correction-stock-pos';
import { entreeStock } from '../fn/mvt-stk-rest/entree-stock';
import { EntreeStock$Params } from '../fn/mvt-stk-rest/entree-stock';
import { mvtStkArticle } from '../fn/mvt-stk-rest/mvt-stk-article';
import { MvtStkArticle$Params } from '../fn/mvt-stk-rest/mvt-stk-article';
import { MvtStkDto } from '../models/mvt-stk-dto';
import { sortieStock } from '../fn/mvt-stk-rest/sortie-stock';
import { SortieStock$Params } from '../fn/mvt-stk-rest/sortie-stock';
import { stockReelArticle } from '../fn/mvt-stk-rest/stock-reel-article';
import { StockReelArticle$Params } from '../fn/mvt-stk-rest/stock-reel-article';

@Injectable({ providedIn: 'root' })
export class MvtStkRestService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `sortieStock()` */
  static readonly SortieStockPath = '/mvtStk/sortie';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sortieStock()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sortieStock$Response(params: SortieStock$Params, context?: HttpContext): Observable<StrictHttpResponse<MvtStkDto>> {
    return sortieStock(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sortieStock$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sortieStock(params: SortieStock$Params, context?: HttpContext): Observable<MvtStkDto> {
    return this.sortieStock$Response(params, context).pipe(
      map((r: StrictHttpResponse<MvtStkDto>): MvtStkDto => r.body)
    );
  }

  /** Path part for operation `entreeStock()` */
  static readonly EntreeStockPath = '/mvtStk/entree';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `entreeStock()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  entreeStock$Response(params: EntreeStock$Params, context?: HttpContext): Observable<StrictHttpResponse<MvtStkDto>> {
    return entreeStock(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `entreeStock$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  entreeStock(params: EntreeStock$Params, context?: HttpContext): Observable<MvtStkDto> {
    return this.entreeStock$Response(params, context).pipe(
      map((r: StrictHttpResponse<MvtStkDto>): MvtStkDto => r.body)
    );
  }

  /** Path part for operation `correctionStockPos()` */
  static readonly CorrectionStockPosPath = '/mvtStk/correctionpos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `correctionStockPos()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  correctionStockPos$Response(params: CorrectionStockPos$Params, context?: HttpContext): Observable<StrictHttpResponse<MvtStkDto>> {
    return correctionStockPos(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `correctionStockPos$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  correctionStockPos(params: CorrectionStockPos$Params, context?: HttpContext): Observable<MvtStkDto> {
    return this.correctionStockPos$Response(params, context).pipe(
      map((r: StrictHttpResponse<MvtStkDto>): MvtStkDto => r.body)
    );
  }

  /** Path part for operation `correctionStockNeg()` */
  static readonly CorrectionStockNegPath = '/mvtStk/correctionneg';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `correctionStockNeg()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  correctionStockNeg$Response(params: CorrectionStockNeg$Params, context?: HttpContext): Observable<StrictHttpResponse<MvtStkDto>> {
    return correctionStockNeg(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `correctionStockNeg$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  correctionStockNeg(params: CorrectionStockNeg$Params, context?: HttpContext): Observable<MvtStkDto> {
    return this.correctionStockNeg$Response(params, context).pipe(
      map((r: StrictHttpResponse<MvtStkDto>): MvtStkDto => r.body)
    );
  }

  /** Path part for operation `stockReelArticle()` */
  static readonly StockReelArticlePath = '/mvtStk/stockreel/{idArticle}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `stockReelArticle()` instead.
   *
   * This method doesn't expect any request body.
   */
  stockReelArticle$Response(params: StockReelArticle$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return stockReelArticle(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `stockReelArticle$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  stockReelArticle(params: StockReelArticle$Params, context?: HttpContext): Observable<number> {
    return this.stockReelArticle$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `mvtStkArticle()` */
  static readonly MvtStkArticlePath = '/mvtStk/mvtstk/filter/article/{idArticle}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `mvtStkArticle()` instead.
   *
   * This method doesn't expect any request body.
   */
  mvtStkArticle$Response(params: MvtStkArticle$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MvtStkDto>>> {
    return mvtStkArticle(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `mvtStkArticle$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  mvtStkArticle(params: MvtStkArticle$Params, context?: HttpContext): Observable<Array<MvtStkDto>> {
    return this.mvtStkArticle$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MvtStkDto>>): Array<MvtStkDto> => r.body)
    );
  }

}
