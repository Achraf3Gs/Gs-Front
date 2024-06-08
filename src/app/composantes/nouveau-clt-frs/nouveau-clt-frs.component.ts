import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientDto } from '../../../gs-api/src/models/client-dto';
import { AdresseDto } from '../../../gs-api/src/models/adresse-dto';
import { Save4$Params } from '../../../gs-api/src/fn/client-rest/save-4';
import { Save2$Params } from '../../../gs-api/src/fn/fournisseur-rest/save-2';
import { Delete6$Params } from '../../../gs-api/src/fn/client-rest/delete-6';
import { Delete2$Params } from '../../../gs-api/src/fn/fournisseur-rest/delete-2';
import { CltfrsService } from '../../services/cltfrs/cltfrs.service';
import { FournisseurDto } from '../../../gs-api/src/models/fournisseur-dto';
import { HttpErrorResponse } from '@angular/common/http';
import { FindById6$Params } from '../../../gs-api/src/fn/client-rest/find-by-id-6';
import { FindById2$Params } from '../../../gs-api/src/fn/fournisseur-rest/find-by-id-2';



@Component({
  selector: 'app-nouveau-clt-frs',
  templateUrl: './nouveau-clt-frs.component.html',
  styleUrl: './nouveau-clt-frs.component.scss'
})
export class NouveauCltFrsComponent {
  clientFournisseur: ClientDto= {
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
  };
  defaultAdresse: AdresseDto = {
    adresse1: '',
    adresse2: '',
    ville: '',
    codePostale: '',
    pays: ''
  };
  
adresse:AdresseDto={
adresse1:'',
adresse2: '',
codePostale: '',
pays: '',
ville: ''
};

founisseurDto: Save2$Params= {
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
IdClientd:  Delete6$Params= {
  idClient: 0,
};
IdFournisseurd:  Delete2$Params= {
  idFournisseur: 0,
};
IdClient:  FindById6$Params= {
  idClient: 0,
};
IdFournisseur:  FindById2$Params= {
  idFournisseur: 0,
};
  
  adresseDto:AdresseDto={};
  errorMessage: Array<string> = [];
  origin='';


  

  constructor(
    private router:Router,
    private activatedRoute: ActivatedRoute,
    private cltfrsService : CltfrsService
  ){}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.origin = data['origin'];
      console.log('Origin:', this.origin);
    });

    this.activatedRoute.params.subscribe(params => {
      const idClient = params['idClient'];
      const idFournisseur = params['idFournisseur'];
      console.log('idClient:', idClient);  // This should log the `idClient` parameter
      console.log('idFournisseur:', idFournisseur);  // This should log the `idFournisseur` parameter
      if (idClient) {
        this.findObject(idClient);
      } else if (idFournisseur) {
        this.findObject(idFournisseur);
      } else {
        console.error('No ID found in route parameters');
      }
    });
  }

  findObject(id: number) {
    if (this.origin === 'client') {
      this.IdClient.idClient = id;
      this.cltfrsService.findClientById(this.IdClient).subscribe(client => {
        this.clientFournisseur = client.body;
        this.adresseDto = this.clientFournisseur.adresse ?? this.defaultAdresse;
        console.log('Client fetched:', this.clientFournisseur);
      }, error => {
        console.error('Error fetching client:', error);
      });
    } else if (this.origin === 'fournisseur') {
      this.IdFournisseur.idFournisseur = id;
      this.cltfrsService.findFournisseurtById(this.IdFournisseur).subscribe({
        next: (response: any) => {
          const reader = new FileReader();
          reader.onload = () => {
            const text = reader.result as string;
            const data = JSON.parse(text);
            console.log('Fournisseur fetched:', data);
            this.clientFournisseur =  data;
            this.adresseDto = this.clientFournisseur.adresse ?? this.defaultAdresse;
            console.log('Fournisseur fetched:', this.clientFournisseur);
          };
          reader.onerror = (error) => {
            console.error('Error fetching fournisseur:', error);
            this.ErrorHandle(error);
          };
          reader.readAsText(response.body);
        },
        error: (error: any) => {
          console.error('Error occurred:', error);
          this.ErrorHandle(error);
        }
      });
    }
  }
      
     
  

  


  nouvelleCommande(): void{
    if(this.origin==='client'){
      this.router.navigate(['nouvellecommandeclt']);
    }else if (this.origin==='fournisseur'){
      this.router.navigate(['nouveaufournisseur']);
    }
  }

  entrgistrer():void{
    if(this.origin==='client'){
      this.EnregistrerClient()
    }else if (this.origin==='fournisseur'){
      this.EnregistrerFournisseur()
    }
  }

  
  cancelClick():void{
    if (this.origin==='client'){
      this.router.navigate(['clients'])
    }else if(this.origin==='fournisseur'){
      this.router.navigate(['fournisseurs'])
    }
  }

  mapToClient(): Save4$Params {
    return {
      body: {
        id: this.clientFournisseur.id,
        idEntreprise: this.clientFournisseur.idEntreprise,
        mail: this.clientFournisseur.mail,
        nom: this.clientFournisseur.nom,
        numTel: this.clientFournisseur.numTel,
        photo: this.clientFournisseur.photo,
        prenom: this.clientFournisseur.prenom,
        adresse: this.adresseDto
      }
    };
  }

  mapToFournisseur(): Save2$Params {
    return {
      body: {
        id: this.clientFournisseur.id,
        idEntreprise: this.clientFournisseur.idEntreprise,
        mail: this.clientFournisseur.mail,
        nom: this.clientFournisseur.nom,
        numTel: this.clientFournisseur.numTel,
        photo: this.clientFournisseur.photo,
        prenom: this.clientFournisseur.prenom,
        adresse: this.adresseDto,
      
      }
    };
  }
EnregistrerClient(){
  console.log('Origin :', this.origin)
  this.cltfrsService.enregistrerClient(this.mapToClient()).subscribe({
    next: (client: any) => {
      console.log('Client enregistered successfully:', client);
      this.router.navigate(['clients'])
    },
    error: (error: any) => {
      this.ErrorHandle(error);
    }
  })
}
EnregistrerFournisseur(){
  console.log('Origin :', this.origin)
  this.cltfrsService.enregistrerFournisseur(this.mapToFournisseur()).subscribe({
    next: (frs: any) => {
      console.log('Fournisseur enregistered successfully:', frs);
      this.router.navigate(['fournisseurs'])
    },
    error: (error: any) => {
      this.ErrorHandle(error);
    }
  });
}
ErrorHandle(error: any): void {
  console.error('Error occurred:', error);
  if (error instanceof HttpErrorResponse) {
    try {
      const errorResponse = error.error;
      console.log('Error Response:', errorResponse);

      if (errorResponse.errors && Array.isArray(errorResponse.errors)) {
        this.errorMessage = errorResponse.errors;
      } else {
        this.errorMessage = ['An unknown error occurred.'];
      }
    } catch (e) {
      this.errorMessage = ['An unknown error occurred.'];
    }
  } else {
    this.errorMessage = ['An unknown error occurred.'];
  }
}

}