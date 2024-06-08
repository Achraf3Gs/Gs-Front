import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientDto } from '../../../../gs-api/src/models/client-dto';
import { CltfrsService } from '../../../services/cltfrs/cltfrs.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-page-client',
  templateUrl: './page-client.component.html',
  styleUrls: ['./page-client.component.scss']
})
export class PageClientComponent implements OnInit {
  listeClients: ClientDto[] = [];
  errorMessage: string[] = [];

  constructor(
    private router: Router,
    private cltFrsService: CltfrsService
  ) {}

  ngOnInit(): void {
    this.findAllClients();
  }

  findAllClients(): void {
    this.cltFrsService.findAllClients().subscribe({
      next: (data: any) => {
        console.log('List of Clients:', data.body);
        this.listeClients = data.body;
      },
      error: (error: any) => {
        console.error('Error occurred:', error);
        this.handleError(error);
      }
    });
  }

  handleSuppression(event: any): void {
    if (event.result === 'success') {
      this.findAllClients();
    } else {
      this.errorMessage = event;
    }
  }

  nouveauClient(): void {
    this.router.navigate(['nouveauclient']);
  }

  private handleError(error: any): void {
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
