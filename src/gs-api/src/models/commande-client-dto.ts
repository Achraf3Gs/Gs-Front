/* tslint:disable */
/* eslint-disable */
import { ClientDto } from '../models/client-dto';
import { LigneCommandeClientDto } from '../models/ligne-commande-client-dto';
export interface CommandeClientDto {
  client?: ClientDto;
  code?: string;
  commandeLivree?: boolean;
  dateCommande?: string;
  etatCommande?: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
  id?: number;
  idEntreprise?: number;
  ligneCommandeClients?: Array<LigneCommandeClientDto>;
}
