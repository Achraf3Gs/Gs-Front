import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FournisseurDto } from '../../../../gs-api/src/models';
import { privateDecrypt } from 'crypto';
import { CltfrsService } from '../../../services/cltfrs/cltfrs.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-page-fournisseur',
  templateUrl: './page-fournisseur.component.html',
  styleUrl: './page-fournisseur.component.scss',
})
export class PageFournisseurComponent implements OnInit {
  listeFournisseurs: Array<FournisseurDto> = [];
  errorMessage: Array<string> = [];
  constructor(private router: Router, private cltFrsService: CltfrsService) {}

  ngOnInit(): void {
    this.findAllFournisseurs();
  }

  findAllFournisseurs(): void {
    this.cltFrsService.findAllFournisseurs().subscribe({
      next: (data: any) => {
        console.log('List of Clients:', data.body);
        this.listeFournisseurs = data.body;
      },
      error: (error: any) => {
        console.error('Error occurred:', error);
        this.handleError(error);
      },
    });
  }

  nouveauFournisseur(): void {
    this.router.navigate(['nouveaufournisseur']);
  }

  handleError(error: any): void {
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

  handleSuppression(event: any): void {
    if (event.result === 'success') {
      this.findAllFournisseurs();
    } else {
      this.errorMessage = event;
    }
  }
}
