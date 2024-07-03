import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClientDto } from '../../../gs-api/src/models/client-dto';
import { Router } from '@angular/router';
import { CltfrsService } from '../../services/cltfrs/cltfrs.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FournisseurDto } from '../../../gs-api/src/models/fournisseur-dto';

@Component({
  selector: 'app-detail-clt-frs',
  templateUrl: './detail-clt-frs.component.html',
  styleUrl: './detail-clt-frs.component.scss',
})
export class DetailCltFrsComponent implements OnInit {
  @Input()
  origin: string = '';

  @Input()
  clientFournisseur: any = {};

  @Output()
  suppressionReuslt = new EventEmitter();

  listeCients: Array<ClientDto> = [];
  listeFournisseurs: Array<FournisseurDto> = [];

  errorMessage: Array<string> = [];
  constructor(private router: Router, private cltfrsService: CltfrsService) {}
  ngOnInit() {}
  modifierClientFournisseur(): void {
    if (this.origin === 'client') {
      this.router.navigate(['nouveauclient', this.clientFournisseur.id]);
    } else if (this.origin === 'fournisseur') {
      this.router.navigate(['nouveaufournisseur', this.clientFournisseur.id]);
    }
  }

  ConfirmerEtSupprimerClient() {
    console.log('origin', this.origin);
    console.log('idcltfournisseur', this.clientFournisseur.id);
    if (this.origin === 'client') {
      this.ConfirmDeleteClient();
    } else if (this.origin === 'fournisseur') {
      this.ConfirmDeleteFournisseur();
    }
  }

  ConfirmDeleteClient() {
    if (this.clientFournisseur.id) {
      console.log('Deleting client with ID:', this.clientFournisseur.id);
      this.cltfrsService.deleteClient(this.clientFournisseur.id).subscribe({
        next: (res: any) => {
          console.log('Delete successful:', res);
          // this.suppressionReuslt.emit('success');
          this.suppressionReuslt.emit({
            result: 'success',
            clients: this.listeCients,
          });
          console.log('listeClients', this.listeCients);
        },
        error: (error: any) => {
          console.error('Error occurred while deleting client:', error);
          if (error instanceof HttpErrorResponse) {
            if (error.status === 400 && error.error) {
              try {
                const errorResponse = JSON.parse(error.error);
                console.log('Error Response:', errorResponse);
                const errorMessage = errorResponse.message || [
                  'An error occurred while deleting the client.',
                ];
                console.error(errorMessage);
                this.errorMessage = [errorMessage];
                this.suppressionReuslt.emit(this.errorMessage);
              } catch (e) {
                this.errorMessage = [
                  'An unknown error occurred while parsing the error response.',
                ];
                console.error('Error parsing response:', e);
              }
            } else {
              const errorMessage = [
                'An unknown error occurred while deleting the client.',
              ];
              console.error(errorMessage);
              this.errorMessage = errorMessage;
            }
          } else {
            const errorMessage = ['An unknown error occurred.'];
            console.error(errorMessage);
            this.errorMessage = errorMessage;
          }
        },
      });
    } else {
      console.log(
        'Invalid SelectedArToDelete value:',
        this.clientFournisseur.id
      );
    }
  }

  ConfirmDeleteFournisseur() {
    if (this.clientFournisseur.id) {
      console.log('Deleting Founisseur with ID:', this.clientFournisseur.id);
      this.cltfrsService.deleteFounisseur(this.clientFournisseur.id).subscribe({
        next: (res: any) => {
          console.log('Delete successful:', res);
          // this.suppressionReuslt.emit('success');
          this.suppressionReuslt.emit({
            result: 'success',
            fournisseurs: this.listeFournisseurs,
          });
          console.log('fournisseur est supprimé avec');
        },
        error: (error: any) => {
          console.error('Error occurred while deleting fournisseur:', error);
          if (error instanceof HttpErrorResponse) {
            if (error.status === 400 && error.error) {
              try {
                const errorResponse = JSON.parse(error.error);
                console.log('Error Response:', errorResponse);
                const errorMessage = errorResponse.message || [
                  'An error occurred while deleting the fournisseur.',
                ];
                console.error(errorMessage);
                this.errorMessage = [errorMessage];
                this.suppressionReuslt.emit(this.errorMessage);
              } catch (e) {
                this.errorMessage = [
                  'An unknown error occurred while parsing the error response.',
                ];
                console.error('Error parsing response:', e);
              }
            } else {
              const errorMessage = [
                'An unknown error occurred while deleting the fournisseur.',
              ];
              console.error(errorMessage);
              this.errorMessage = errorMessage;
            }
          } else {
            const errorMessage = ['An unknown error occurred.'];
            console.error(errorMessage);
            this.errorMessage = errorMessage;
          }
        },
      });
    } else {
      console.log(
        'Invalid SelectedArToDelete value:',
        this.clientFournisseur.id
      );
    }
  }
}
