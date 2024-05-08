/* tslint:disable */
/* eslint-disable */
import { AdresseDto } from '../models/adresse-dto';
import { CommandeFournisseurDto } from '../models/commande-fournisseur-dto';
export interface FournisseurDto {
  adresse?: AdresseDto;
  commandeFournisseurs?: Array<CommandeFournisseurDto>;
  id?: number;
  idEntreprise?: number;
  mail?: string;
  nom?: string;
  numTel?: string;
  photo?: string;
  prenom?: string;
}
