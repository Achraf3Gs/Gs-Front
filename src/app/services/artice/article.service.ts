import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { ArticleRestService } from '../../../gs-api/src/services/article-rest.service';
import { Save6$Params } from '../../../gs-api/src/fn/article-rest/save-6';
import { StrictHttpResponse } from '../../../gs-api/src/strict-http-response';
import { Observable, of } from 'rxjs';
import { ArticleDto } from '../../../gs-api/src/models/article-dto';
import { FindById8$Params } from '../../../gs-api/src/fn/article-rest/find-by-id-8';
import { CategoryDto } from '../../../gs-api/src/models/category-dto';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  artictleDto: Save6$Params ={
    body:{
      codeArticle: '',
      designation:'',
      id: 0,  // Assuming id should be an integer
     // idEntreprise: 0,
      photo: '',
       // Do not assign default values to these properties
      // prixUnitaireHt: undefined,
      // prixUnitaireTtc: undefined,
      // tauxTva: undefined,
      category: {
        code: '',
        designation: '',
        id: 0,
        idEntreprise: 0
      }
    }
};
categoryDto:CategoryDto={
    code: '',
    designation: '',
   // id: 0,
    //idEntreprise:0
};
  id: FindById8$Params= {
    idArticle: 0,
  }
  constructor(
    private userService:UserService,
    private articleService: ArticleRestService
  ) { }


  enregistrerArticle(articleDto:Save6$Params ):Observable<StrictHttpResponse<ArticleDto>>{
 
    return this.articleService.save6$Response(articleDto);
  }

  findAllArticles(): Observable<StrictHttpResponse<Array<ArticleDto>>>{
    return this.articleService.findAll6$Response();
  }

  findArticleById(id:FindById8$Params): Observable<ArticleDto>{
    if(id){
    return this.articleService.findById8(id);
  }
  return of();
  }
}
