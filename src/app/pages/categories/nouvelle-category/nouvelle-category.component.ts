import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryDto } from '../../../../gs-api/src/models/category-dto';
import { CategoryRestService } from '../../../../gs-api/src/services';
import { Save5$Params } from '../../../../gs-api/src/fn/category-rest/save-5';
import { HttpErrorResponse } from '@angular/common/http';
import { CategoryService } from '../../../services/category/category.service';
import { FindById7$Params } from '../../../../gs-api/src/fn/category-rest/find-by-id-7';

@Component({
  selector: 'app-nouvelle-category',
  templateUrl: './nouvelle-category.component.html',
  styleUrl: './nouvelle-category.component.scss'
})
export class NouvelleCategoryComponent {

  categoryDto: Save5$Params= {
    body: {
      code: '',
      designation: '',
      id: 0,
      idEntreprise:0
    }
  }
  IdCategori: FindById7$Params= {
    idCategory: 0,
}
  errorMessage: Array<string>=[];
  
  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    
    this.IdCategori.idCategory=this.activatedRoute.snapshot.params['idCategory'];
      console.log('Idcategory',this.IdCategori)
      if(this.IdCategori){
        this.categoryService.findById(this.IdCategori).subscribe(cat=>{
          this.categoryDto=cat;
        })
      }
   
  }

  saveClick():void{
    
  }
  cancelClick():void{
    
      this.router.navigate(['categories'])
  }

  enregisterCategory():void{
    this.categoryService.enregistrerCategory(this.categoryDto).subscribe({
      next: (data: any) => {
        console.log('Category created successfully:', data);
        this.router.navigate(['categories']);
      },
      error: (error: any) => {
        console.error('Error occurred:', error);
        this.ErrorHandle(error)
    }
    });
  }
  ErrorHandle(error: any): void {
    console.error('Error occurred:', error);
    if (error instanceof HttpErrorResponse) {
      try {
        const errorResponse = error.error;
        console.log('Error Response:', errorResponse);
  
        if (errorResponse.errors && Array.isArray(errorResponse.errors)) {
          this.errorMessage = errorResponse.errors;
        } else {
          this.errorMessage = ['An unknown error occurred.'];
        }
      } catch (e) {
        this.errorMessage = ['An unknown error occurred.'];
      }
    } else {
      this.errorMessage = ['An unknown error occurred.'];
    }
  }
  
  }



  
