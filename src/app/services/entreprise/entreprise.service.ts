import { Injectable } from '@angular/core';
import { EntrepriseRestService } from '../../../gs-api/src/services';
import { EntrepriseDto } from '../../../gs-api/src/models';
import { Observable } from 'rxjs';
import { Save3$Params } from '../../../gs-api/src/fn/entreprise-rest/save-3';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor(
    private entrepriseService: EntrepriseRestService
  ) { }

sinscrire(entreprise:Save3$Params):Observable<EntrepriseDto>{
  return this.entrepriseService.save3(entreprise);
}
}
