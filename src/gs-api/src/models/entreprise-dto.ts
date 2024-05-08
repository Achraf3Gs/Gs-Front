/* tslint:disable */
/* eslint-disable */
import { AdresseDto } from '../models/adresse-dto';
import { Utilisateur } from '../models/utilisateur';
export interface EntrepriseDto {
  adresse?: AdresseDto;
  codeFiscal?: string;
  description?: string;
  email?: string;
  id?: number;
  nom?: string;
  numTel?: string;
  photo?: string;
  steWeb?: string;
  utilisateurs?: Array<Utilisateur>;
}
