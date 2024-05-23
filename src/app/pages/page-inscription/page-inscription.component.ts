import { Component, OnInit } from '@angular/core';
import { EntrepriseDto } from '../../../gs-api/src/models/entreprise-dto';

;
import { HttpErrorResponse } from '@angular/common/http';
import { EntrepriseService } from '../../services/entreprise/entreprise.service';
import { AdresseDto, UtilisateurDto } from '../../../gs-api/src/models';
import { UserService } from '../../services/user/user.service';
import { response } from 'express';
import { Router } from '@angular/router';
import { Register1$Params } from '../../../gs-api/src/fn/authentication-controller/register-1';
import { Save3$Params } from '../../../gs-api/src/fn/entreprise-rest/save-3';
import { FindByEmail$Params } from '../../../gs-api/src/fn/utilisateur-rest/find-by-email';

@Component({
  selector: 'app-page-inscription',
  templateUrl: './page-inscription.component.html',
  styleUrl: './page-inscription.component.scss'
})
export class PageInscriptionComponent implements OnInit{
  authenticationRequest: Register1$Params= {
    body: {
      email: '',
      password: '',
    }
  }
  emailParam: FindByEmail$Params = {
    email: '',
  };
  entrepriseDto: Save3$Params= {
    body:{
      nom: '',
      codeFiscal: '',
      email: '',
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
userReceived: UtilisateurDto = {};
errorMessage: Array<string>=[];

  constructor(
    private  entrepriseService: EntrepriseService,
    private userService: UserService,
    private router: Router
  ){}

  ngOnInit():void{}

  inscrire(): void{
    this.entrepriseDto.body.adresse=this.adresse;
    console.log(this.entrepriseDto)
    console.log(this.adresse)
    this.entrepriseService.sinscrire(this.entrepriseDto).subscribe({
      next: (data: any) => {
        console.log('Entreprise created successfully:', data);
       this.connectEnteprise();
      },
      error: (error: any) => {
        console.error('Error occurred:', error);
        if (error instanceof HttpErrorResponse && error.error instanceof Blob && error.error.type === 'application/json') {
            // Parse the error response as JSON
            const reader = new FileReader();
            reader.onload = () => {
                const errorResponse = JSON.parse(reader.result as string);
                console.log('Error Response:', errorResponse);
                
                // Now you can access properties like errorResponse.httpCode, errorResponse.code, etc.
                const errorMessage =  errorResponse.errors;
                console.error(errorMessage);
                this.errorMessage = errorMessage;
            };
            reader.readAsText(error.error);
        } else {
            const errorMessage = ['An unknown error occurred.'];
            console.error(errorMessage);
            this.errorMessage = errorMessage;
        }
    }
    });
  }

  connectEnteprise():void{
    const authenticationRequest:  Register1$Params={
      body: {
        email: this.entrepriseDto.body.email,
        password: '12345',
      }
     }
     this.emailParam.email = authenticationRequest.body.email || "";
     console.log(authenticationRequest);
     this.userService.login(authenticationRequest)
     .subscribe
     ({
      next: (data: any) => {
        this.userService.setAccessToken(data);
        this.userService.getUserByEmail(this.emailParam).subscribe({
          next: (user: UtilisateurDto) => {
            console.log('Received user:', user);
            if (user instanceof Blob) {
              const reader = new FileReader();
              reader.onload = () => {
                try {
                  const responseBody = JSON.parse(reader.result as string);
                  console.log('Response Body:', responseBody);
                  this.userReceived = responseBody;
                  //this.userService.setConnectedUser(responseBody)
                  localStorage.setItem('connectedUser', JSON.stringify(this.userReceived));
                  console.log('Received user:', this.userReceived);
                } catch (e) {
                  console.error('Error parsing response body:', e);
                }
              };
              reader.readAsText(user);
            } else {
              this.userReceived = user;
              localStorage.setItem('connectedUser', JSON.stringify(this.userReceived));
            }
          }
        })
      
        


        localStorage.setItem('origin','inscription');
        // Optionally, navigate to another route after successful login
        this.router.navigate(['changermotdepasse']); // Example route
      }
     
  });
}

}
