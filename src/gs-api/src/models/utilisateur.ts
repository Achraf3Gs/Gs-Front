/* tslint:disable */
/* eslint-disable */
import { Adresse } from '../models/adresse';
import { Entreprise } from '../models/entreprise';
export interface Utilisateur {
  adresse?: Adresse;
  creationDate?: string;
  dateDeNaissance?: string;
  email?: string;
  entreprise?: Entreprise;
  id?: number;
  lastModifiedDate?: string;
  moteDePasse?: string;
  nom?: string;
  photo?: string;
  prenom?: string;
}
