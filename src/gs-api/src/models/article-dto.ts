/* tslint:disable */
/* eslint-disable */
import { CategoryDto } from '../models/category-dto';
export interface ArticleDto {
  category?: CategoryDto;
  codeArticle?: string;
  designation?: string;
  id?: number;
  idEntreprise?: number;
  photo?: string;
  prixUnitaireHt?: number;
  prixUnitaireTtc?: number;
  tauxTva?: number;
}
