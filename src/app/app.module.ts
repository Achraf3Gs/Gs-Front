import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PagesStatistiquesComponent } from './pages/pages-statistiques/pages-statistiques.component';
import { MenuComponent } from './composantes/menu/menu.component';
import { HeaderComponent } from './composantes/header/header.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { DetailArticleComponent } from './composantes/detail-article/detail-article.component';
import { PaginationComponent } from './composantes/pagination/pagination.component';
import { BouttonActionComponent } from './composantes/boutton-action/boutton-action.component';

import { PageMvtstkComponent } from './pages/mvtstk/page-mvtstk/page-mvtstk.component';
import { DetailMvtStkArticleComponent } from './composantes/detail-mvt-stk-article/detail-mvt-stk-article.component';
import { DetailMvtStkComponent } from './composantes/detail-mvt-stk/detail-mvt-stk.component';
import { DetailCltFrsComponent } from './composantes/detail-clt-frs/detail-clt-frs.component';
import { PageFournisseurComponent } from './pages/fournisseur/page-fournisseur/page-fournisseur.component';
import { DetailFrsCltComponent } from './app/composantes/detail-frs-clt/detail-frs-clt.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { NouveauCltFrsComponent } from './composantes/nouveau-clt-frs/nouveau-clt-frs.component';
import { DetailCmdCltFrsComponent } from './composantes/detail-cmd-clt-frs/detail-cmd-clt-frs.component';
import { DetailCmdComponent } from './composantes/detail-cmd/detail-cmd.component';
import { PageCmdCltFrsComponent } from './pages/cmd-clt-frs/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { NouvelleCmdCltFrsComponent } from './composantes/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component';
import { PageCategoriesComponent } from './pages/categories/page-categories/page-categories.component';
import { NouvelleCategoryComponent } from './pages/categories/nouvelle-category/nouvelle-category.component';
import { PageUtilisateurComponent } from './pages/page-utilisateur/page-utilisateur.component';
import { DetailUtilisateurComponent } from './composantes/detail-utilisateur/detail-utilisateur.component';
import { NouveauUtilisateurComponent } from './composantes/nouveau-utilisateur/nouveau-utilisateur/nouveau-utilisateur.component';
import { ChangerMotDePasseComponent } from './pages/profil/changer-mot-de-passe/changer-mot-de-passe.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { FormsModule } from '@angular/forms';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
  provideHttpClient,
} from '@angular/common/http';
import { withFetch } from '@angular/common/http';
import { InterceptorService } from './services/interceptor/interceptor.service';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    PageDashboardComponent,
    PagesStatistiquesComponent,
    MenuComponent,
    HeaderComponent,
    PageArticleComponent,
    DetailArticleComponent,
    PaginationComponent,
    BouttonActionComponent,
    NouvelArticleComponent,
    PageMvtstkComponent,
    DetailMvtStkArticleComponent,
    DetailMvtStkComponent,
    DetailCltFrsComponent,
    PageFournisseurComponent,
    DetailFrsCltComponent,
    PageClientComponent,
    NouveauCltFrsComponent,
    DetailCmdCltFrsComponent,
    DetailCmdComponent,
    PageCmdCltFrsComponent,
    NouvelleCmdCltFrsComponent,
    PageCategoriesComponent,
    NouvelleCategoryComponent,
    PageUtilisateurComponent,
    DetailUtilisateurComponent,
    NouveauUtilisateurComponent,
    ChangerMotDePasseComponent,
    PageProfilComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    provideHttpClient(withFetch()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
