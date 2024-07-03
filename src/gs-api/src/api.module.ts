/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { MvtStkRestService } from './services/mvt-stk-rest.service';
import { VentesRestService } from './services/ventes-rest.service';
import { UtilisateurRestService } from './services/utilisateur-rest.service';
import { PhotoControllerService } from './services/photo-controller.service';
import { FournisseurRestService } from './services/fournisseur-rest.service';
import { EntrepriseRestService } from './services/entreprise-rest.service';
import { CommandeClientRestService } from './services/commande-client-rest.service';
import { CommandeFournisseurRestService } from './services/commande-fournisseur-rest.service';
import { ClientRestService } from './services/client-rest.service';
import { CategoryRestService } from './services/category-rest.service';
import { ArticleRestService } from './services/article-rest.service';
import { AuthenticationControllerService } from './services/authentication-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    MvtStkRestService,
    VentesRestService,
    UtilisateurRestService,
    PhotoControllerService,
    FournisseurRestService,
    EntrepriseRestService,
    CommandeClientRestService,
    CommandeFournisseurRestService,
    ClientRestService,
    CategoryRestService,
    ArticleRestService,
    AuthenticationControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
