/* tslint:disable */
/* eslint-disable */
import { Adresse } from '../models/adresse';
export interface AuthenticationResponse {
  address?: Adresse;
  id?: number;
  idEntreprise?: string;
  message?: string;
  name?: string;
  token?: string;
}
