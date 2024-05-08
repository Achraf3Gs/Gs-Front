/* tslint:disable */
/* eslint-disable */
import { Adresse } from '../models/adresse';
import { Utilisateur } from '../models/utilisateur';
export interface Entreprise {
  adresse?: Adresse;
  codeFiscal?: string;
  creationDate?: string;
  description?: string;
  email?: string;
  id?: number;
  lastModifiedDate?: string;
  nom?: string;
  numTel?: string;
  photo?: string;
  steWeb?: string;
  utilisateurs?: Array<Utilisateur>;
}
