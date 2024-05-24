import { Injectable } from '@angular/core';
import { Router } from '@angular/router';




import { Observable } from 'rxjs';
import { FindByEmail$Params } from '../../../gs-api/src/fn/utilisateur-rest/find-by-email';
import { AuthenticationControllerService } from '../../../gs-api/src/services/authentication-controller.service';
import { UtilisateurRestService } from '../../../gs-api/src/services/utilisateur-rest.service';
import { Register1$Params } from '../../../gs-api/src/fn/authentication-controller/register-1';
import { UtilisateurDto } from '../../../gs-api/src/models/utilisateur-dto';
import { ChangerMotDePasse$Params } from '../../../gs-api/src/fn/utilisateur-rest/changer-mot-de-passe';



@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(
    private authenticationService: AuthenticationControllerService,
    private utilisateurService: UtilisateurRestService,
    private router: Router
  ) { }

  login(authenticationRequest: Register1$Params) {
    return this.authenticationService.register1$Response(authenticationRequest);
  }

  getUserByEmail(email:FindByEmail$Params): Observable<UtilisateurDto>{
   return this.utilisateurService.findByEmail(email)
  }
  setAccessToken(authenticationResponse: string): void {
    if (this.isBrowser()) {
      localStorage.setItem('accessToken', authenticationResponse);
    }
  }
  setConnectedUser(utilisateur:string): void{
    localStorage.setItem('connectedUser', JSON.stringify(utilisateur));
  }

getconnectedUser():UtilisateurDto{
  if (localStorage.getItem('connectedUser')){
    return JSON.parse(localStorage.getItem('connectedUser') as string)
  }
  return {};
}

changerMotDePass(changerMotDePassDto:ChangerMotDePasse$Params){
  return this.utilisateurService.changerMotDePasse(changerMotDePassDto)
}


  isUserLoggedAndAccessTokenValid(): boolean {
    if (this.isBrowser()) {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        // TODO: Verify if access token is valid
        return true;
      }
    }
    this.router.navigate(['login']);
    return false;
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
