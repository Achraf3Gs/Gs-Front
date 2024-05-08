/* tslint:disable */
/* eslint-disable */
import { FournisseurDto } from '../models/fournisseur-dto';
import { LigneCommandeFournisseurDto } from '../models/ligne-commande-fournisseur-dto';
export interface CommandeFournisseurDto {
  code?: string;
  dateCommande?: string;
  fournisseur?: FournisseurDto;
  id?: number;
  idEntreprise?: number;
  ligneCommandeFournisseurs?: Array<LigneCommandeFournisseurDto>;
}
