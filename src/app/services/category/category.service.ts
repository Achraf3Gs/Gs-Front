import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { CategoryRestService } from '../../../gs-api/src/services/category-rest.service';
import { Observable, of } from 'rxjs';
import { CategoryDto } from '../../../gs-api/src/models';
import { Save5$Params } from '../../../gs-api/src/fn/category-rest/save-5';
import { StrictHttpResponse } from '../../../gs-api/src/strict-http-response';
import { FindById7$Params } from '../../../gs-api/src/fn/category-rest/find-by-id-7';
import { Delete7$Params } from '../../../gs-api/src/fn/category-rest/delete-7';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoryDto: Save5$Params= {
    body: {
      code: '',
      designation: '',
      id: 0,
      idEntreprise:0
    }
  }
  id: FindById7$Params= {
    idCategory: 0,
  }
  IdCategorie:  Delete7$Params= {
    idCategory: 0,
}
  constructor(
    private userService: UserService,
    private categoryService: CategoryRestService
    
  ) { }

 enregistrerCategory(categoryDto:Save5$Params): Observable<CategoryDto>{
   categoryDto.body.idEntreprise= this.userService.getconnectedUser().entreprise?.id;
   return this.categoryService.save5(categoryDto);
 }

 findAll(): Observable<StrictHttpResponse<Array<CategoryDto>>>{
  return this.categoryService.findAll5$Response();
 }

 findById(id:FindById7$Params):Observable<StrictHttpResponse<CategoryDto>>{
  return this.categoryService.findById7$Response(id);
 }

 delete(idCat?: number): Observable<StrictHttpResponse<void>> {
  if (idCat) {
    this.IdCategorie.idCategory = idCat;
    console.log("idCategoryAsupprimer :", this.IdCategorie);
    return this.categoryService.delete7$Response(this.IdCategorie);
  }
  return of();
}
}

