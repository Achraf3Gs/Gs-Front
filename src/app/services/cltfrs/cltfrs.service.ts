import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { ClientRestService } from '../../../gs-api/src/services/client-rest.service';
import { FournisseurRestService } from '../../../gs-api/src/services/fournisseur-rest.service';
import { Observable, of } from 'rxjs';
import { Save4$Params } from '../../../gs-api/src/fn/client-rest/save-4';
import { AdresseDto } from '../../../gs-api/src/models/adresse-dto';
import { StrictHttpResponse } from '../../../gs-api/src/strict-http-response';
import { ClientDto } from '../../../gs-api/src/models/client-dto';
import { Save2$Params } from '../../../gs-api/src/fn/fournisseur-rest/save-2';
import { FournisseurDto } from '../../../gs-api/src/models/fournisseur-dto';
import { Delete6$Params } from '../../../gs-api/src/fn/client-rest/delete-6';
import { Delete2$Params } from '../../../gs-api/src/fn/fournisseur-rest/delete-2';
import { FindById6$Params } from '../../../gs-api/src/fn/client-rest/find-by-id-6';
import { FindById2$Params } from '../../../gs-api/src/fn/fournisseur-rest/find-by-id-2';

@Injectable({
  providedIn: 'root'
})
export class CltfrsService {
  ClientDto: Save4$Params= {
    body:{
    id: 0,
    idEntreprise: 0,
    mail: '',
    nom: '',
    numTel: '',
    photo: '',
    prenom: '',
    adresse:{
      adresse1:'',
      adresse2:'',
      ville:'',
      codePostale:'',
      pays:''
    } 
  }
};
  
adresse:AdresseDto={
adresse1:'',
adresse2: '',
codePostale: '',
pays: '',
ville: ''
};

FounisseurDto: Save2$Params= {
  body:{
    commandeFournisseurs: [],
    id: 0,
    idEntreprise:0,
    mail: '',
    nom: '',
    numTel: '',
    photo: '',
    prenom: '',
  adresse:{
    adresse1:'',
    adresse2:'',
    ville:'',
    codePostale:'',
    pays:''
  } 
}
};
IdClient:  Delete6$Params= {
  idClient: 0,
};
IdFournisseur:  Delete2$Params= {
  idFournisseur: 0,
};
errorMessage: Array<string> = [];

  constructor(
    private userService : UserService,
    private clientService: ClientRestService,
    private fournisseurService: FournisseurRestService
  ) { }


  enregistrerClient(clientDto: Save4$Params): Observable<StrictHttpResponse<ClientDto>>{
    clientDto.body.idEntreprise=this.userService.getconnectedUser().entreprise?.id;
    return this.clientService.save4$Response(clientDto);
  }

  enregistrerFournisseur(founisseurtDto: Save2$Params): Observable<StrictHttpResponse<FournisseurDto>>{
    founisseurtDto.body.idEntreprise=this.userService.getconnectedUser().entreprise?.id;

    return this.fournisseurService.save2$Response(founisseurtDto);
  }


findAllClients(): Observable<StrictHttpResponse<Array<ClientDto>>>{
  return this.clientService.findAll4$Response();
}

findAllFournisseurs(): Observable<StrictHttpResponse<Array<FournisseurDto>>>{
  return this.fournisseurService.findAll2$Response();
}

deleteClient(idClt?: number): Observable<StrictHttpResponse<void>> {
  if (idClt) {
    this.IdClient.idClient = idClt;
    console.log("idClientAsupprimer :", this.IdClient);
    return this.clientService.delete6$Response(this.IdClient);
  }
  return of();
}
deleteFounisseur(idFrs?: number): Observable<StrictHttpResponse<void>> {
  if (idFrs) {
    this.IdFournisseur.idFournisseur = idFrs;
    console.log("idFournisseurAsupprimer :", this.IdFournisseur);
    return this.fournisseurService.delete2$Response(this.IdFournisseur);
  }
  return of();
}
findClientById(id:FindById6$Params):Observable<StrictHttpResponse<ClientDto>>{
  return this.clientService.findById6$Response(id);
 }

 findFournisseurtById(id:FindById2$Params):Observable<StrictHttpResponse<FournisseurDto>>{
  return this.fournisseurService.findById2$Response(id);
 }

}

