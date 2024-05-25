import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryDto } from '../../../../gs-api/src/models/category-dto';
import { CategoryRestService } from '../../../../gs-api/src/services';
import { HttpErrorResponse } from '@angular/common/http';
import { FindById7$Params } from '../../../../gs-api/src/fn/category-rest/find-by-id-7';
import { Delete7$Params } from '../../../../gs-api/src/fn/category-rest/delete-7';
import { CategoryService } from '../../../services/category/category.service';

@Component({
  selector: 'app-page-categories',
  templateUrl: './page-categories.component.html',
  styleUrl: './page-categories.component.scss'
})
export class PageCategoriesComponent implements OnInit{

  IdCategori:  Delete7$Params= {
    idCategory: 0,
}
 listeCategories:Array<CategoryDto>=[]
 errorMessage: Array<string>=[];
 errorMgs='';

 SelectedCatToDelete?:number=-1;
  constructor(
    private router:Router,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute
  
  ){}

  ngOnInit(): void {
   this.findAllCategories();
  }

  findAllCategories():void{
    this.categoryService.findAll().subscribe({
      next: (data: any) => {
        console.log('liste de Categories:', data.body);
       this.listeCategories=data.body;
      },
      error: (error: any) => {
        console.error('Error occurred:', error);
        if (error instanceof HttpErrorResponse && error.error instanceof Blob && error.error.type === 'application/json') {
            // Parse the error response as JSON
            const reader = new FileReader();
            reader.onload = () => {
                const errorResponse = JSON.parse(reader.result as string);
                console.log('Error Response:', errorResponse);
                
                // Now you can access properties like errorResponse.httpCode, errorResponse.code, etc.
                const errorMessage =  errorResponse.errors;
                console.error(errorMessage);
                this.errorMessage = errorMessage;
            };
            reader.readAsText(error.error);
        } else {
            const errorMessage = ['An unknown error occurred.'];
            console.error(errorMessage);
            this.errorMessage = errorMessage;
        }
    }
    });
  }

  nouvelleCategory():void{
  this.router.navigate(['nouvelleCategory']);
  }

  modifierCategory(id:number | undefined): void{
    this.router.navigate(['nouvelleCategory',id]);
  }

  SelectCatPourSupprimer(id?:number):void{
  this.SelectedCatToDelete=id;
  console.log(this.SelectedCatToDelete)
  }

  ConfirmerEtSupprimerCat(): void {
    if (this.SelectedCatToDelete !== -1 && this.SelectedCatToDelete !== undefined) {
      console.log('Deleting category with ID:', this.SelectedCatToDelete);
      this.categoryService.delete(this.SelectedCatToDelete).subscribe({
        next: (res: any) => {
          console.log('Delete successful:', res);
          this.findAllCategories();
        },
        error: (error: any) => {
          console.error('Error occurred while deleting category:', error);
          if (error instanceof HttpErrorResponse) {
            if (error.status === 400 && error.error) {
              try {
                const errorResponse = JSON.parse(error.error);
                console.log('Error Response:', errorResponse);
                const errorMessage = errorResponse.message || ['An error occurred while deleting the category.'];
                console.error(errorMessage);
                this.errorMessage = [errorMessage];
              } catch (e) {
                this.errorMessage = ['An unknown error occurred while parsing the error response.'];
                console.error('Error parsing response:', e);
              }
            } else {
              const errorMessage = ['An unknown error occurred while deleting the category.'];
              console.error(errorMessage);
              this.errorMessage = errorMessage;
            }
          } else {
            const errorMessage = ['An unknown error occurred.'];
            console.error(errorMessage);
            this.errorMessage = errorMessage;
          }
        }
      });
    } else {
      console.log('Invalid SelectedCatToDelete value:', this.SelectedCatToDelete);
    }
  }
  

  AnnulerEtSupprimerCat():void{
 this.SelectedCatToDelete=-1;
  }
}


