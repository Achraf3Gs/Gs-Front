import { Component, OnInit } from '@angular/core';
import { EntrepriseDto } from '../../../gs-api/src/models/entreprise-dto';

;
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { EntrepriseService } from '../../services/entreprise/entreprise.service';

import { UserService } from '../../services/user/user.service';
import { response } from 'express';
import { Router } from '@angular/router';

import { FindByEmail$Params } from '../../../gs-api/src/fn/utilisateur-rest/find-by-email';
import { Register1$Params } from '../../../gs-api/src/fn/authentication-controller/register-1';
import { Save3$Params } from '../../../gs-api/src/fn/entreprise-rest/save-3';
import { AdresseDto } from '../../../gs-api/src/models/adresse-dto';
import { UtilisateurDto } from '../../../gs-api/src/models/utilisateur-dto';

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
errorMessage1 = '';
accessToken = '';
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
    
     this.authenticationRequest.body.email =this.entrepriseDto.body.email || '';
     this.authenticationRequest.body.password='12345';
     this.emailParam.email = this.authenticationRequest.body.email || "";
     console.log('authenticationRequest:',this.authenticationRequest);
     this.userService.login(this.authenticationRequest).subscribe({
      next: (response: HttpResponse<any>) => {
        console.log('Login Response:', response);
        this.handleResponse(response);
      },
      error: (error: HttpErrorResponse) => {
        this.handleError(error);
      }
    });
  }

  private handleResponse(response: HttpResponse<any>): void {
    if (response.body instanceof Blob) {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const responseBody = JSON.parse(reader.result as string);
          console.log('Response Body:', responseBody);
          this.accessToken = responseBody.token;
          console.log('insideHandle:', this.accessToken);
          this.userService.setAccessToken(this.accessToken);
          //localStorage.setItem('accessToken', this.accessToken);
          this.router.navigate(['']);
          this.getUserByEmail();
        } catch (e) {
          console.error('Error parsing response body:', e);
          this.errorMessage1 = 'Error parsing response body.';
        }
      };
      reader.readAsText(response.body);
    } else {
      console.error('Unexpected response format:', response);
      this.errorMessage1 = 'Unexpected response format.';
    }
  }

  getUserByEmail(): void {
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
      },
      error: (error: HttpErrorResponse) => {
        this.handleError(error);
      }
    });

    localStorage.setItem('origin','inscription');
    // Optionally, navigate to another route after successful login
    this.router.navigate(['changermotdepasse']); // Example route
  }

  private handleError(error: HttpErrorResponse): void {
    console.error('Error occurred:', error);
    if (error.error instanceof Blob && error.error.type === 'application/json') {
      const reader = new FileReader();
      reader.onload = () => {
        const responseBody = reader.result as string;
        try {
          const errorResponse = JSON.parse(responseBody);
          this.errorMessage = errorResponse.message;
        } catch (e) {
          this.errorMessage1 = 'Error parsing error response.';
        }
      };
      reader.readAsText(error.error);
    } else {
      this.errorMessage1 = 'An unknown error occurred.';
    }
  }

}   


       
