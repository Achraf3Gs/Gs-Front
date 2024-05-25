import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { CategoryRestService } from '../../../gs-api/src/services/category-rest.service';
import { Observable } from 'rxjs';
import { CategoryDto } from '../../../gs-api/src/models';
import { Save5$Params } from '../../../gs-api/src/fn/category-rest/save-5';
import { StrictHttpResponse } from '../../../gs-api/src/strict-http-response';

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

}
