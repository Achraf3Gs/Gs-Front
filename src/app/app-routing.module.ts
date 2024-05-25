import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PagesStatistiquesComponent } from './pages/pages-statistiques/pages-statistiques.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { PageMvtstkComponent } from './pages/mvtstk/page-mvtstk/page-mvtstk.component';

import { PageFournisseurComponent } from './pages/fournisseur/page-fournisseur/page-fournisseur.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { NouveauCltFrsComponent } from './composantes/nouveau-clt-frs/nouveau-clt-frs.component';
import { PageCmdCltFrsComponent } from './pages/cmd-clt-frs/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { NouvelleCmdCltFrsComponent } from './composantes/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component';
import { PageCategoriesComponent } from './pages/categories/page-categories/page-categories.component';
import { NouvelleCategoryComponent } from './pages/categories/nouvelle-category/nouvelle-category.component';
import { PageUtilisateurComponent } from './pages/page-utilisateur/page-utilisateur.component';
import { NouveauUtilisateurComponent } from './composantes/nouveau-utilisateur/nouveau-utilisateur/nouveau-utilisateur.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { ChangerMotDePasseComponent } from './pages/profil/changer-mot-de-passe/changer-mot-de-passe.component';
import { canActivateGuard } from './services/guard/application-guard.service';


const routes: Routes = [
  {path:'login',component: PageLoginComponent },
  {path:'inscrire', component:PageInscriptionComponent},
  {path:'',component:PageDashboardComponent, canActivate:[canActivateGuard],
    children:[
      {path:'statistiques',component:PagesStatistiquesComponent, canActivate:[canActivateGuard]},
      {path:'articles',component:PageArticleComponent, canActivate:[canActivateGuard]},
      {path:'nouvelarticle',component:NouvelArticleComponent, canActivate:[canActivateGuard]},
      {path:'mvtstk',component:PageMvtstkComponent, canActivate:[canActivateGuard]},

      {path:'clients',component:PageClientComponent, canActivate:[canActivateGuard]},
      {path:'nouveauclient',component:NouveauCltFrsComponent, data:{origin:'client'}, canActivate:[canActivateGuard]},
      {path:'commandesclient',component:PageCmdCltFrsComponent, data:{origin:'client'}, canActivate:[canActivateGuard]},
      {path:'nouvellecommandeclt',component:NouvelleCmdCltFrsComponent, data:{origin:'client'}, canActivate:[canActivateGuard]},

      {path:'fournisseurs',component:PageFournisseurComponent, canActivate:[canActivateGuard]},
      {path:'nouveaufournisseur',component:NouveauCltFrsComponent, data:{origin:'fournisseur'}, canActivate:[canActivateGuard]},
      {path:'commandesfournisseur',component:PageCmdCltFrsComponent, data:{origin:'fournisseur'}, canActivate:[canActivateGuard]},
      {path:'nouvellecommandefr',component:NouvelleCmdCltFrsComponent, data:{origin:'fournisseur'}, canActivate:[canActivateGuard]},

      {path:'categories', component:PageCategoriesComponent, canActivate:[canActivateGuard]},
      {path:'nouvelleCategory',component:NouvelleCategoryComponent, canActivate:[canActivateGuard]},
      {path:'nouvelleCategory/:idCategory',component:NouvelleCategoryComponent, canActivate:[canActivateGuard]},

      {path:'utilisateurs', component:PageUtilisateurComponent, canActivate:[canActivateGuard]},
      {path:'nouveauutilisateur',component:NouveauUtilisateurComponent, canActivate:[canActivateGuard]},

      {path:'profil',component:PageProfilComponent, canActivate:[canActivateGuard]},
      {path:'changermotdepasse',component:ChangerMotDePasseComponent, canActivate:[canActivateGuard]}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
