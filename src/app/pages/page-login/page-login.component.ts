import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { FindByEmail$Params } from '../../../gs-api/src/fn/utilisateur-rest/find-by-email';
import { UtilisateurDto } from '../../../gs-api/src/models/utilisateur-dto';
import { Register1$Params } from '../../../gs-api/src/fn/authentication-controller/register-1';


@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {
  accessToken = '';
  userReceived: UtilisateurDto = {}
  authenticationRequest: Register1$Params = {
    body: {
      email: '',
      password: '',
    }
  };
  emailParam: FindByEmail$Params = {
    email: '',
  };
  errorMessage = '';

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    console.log(this.authenticationRequest);
    this.emailParam.email = this.authenticationRequest.body.email || '';
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
          this.errorMessage = 'Error parsing response body.';
        }
      };
      reader.readAsText(response.body);
    } else {
      console.error('Unexpected response format:', response);
      this.errorMessage = 'Unexpected response format.';
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
          this.errorMessage = 'Error parsing error response.';
        }
      };
      reader.readAsText(error.error);
    } else {
      this.errorMessage = 'An unknown error occurred.';
    }
  }
}
