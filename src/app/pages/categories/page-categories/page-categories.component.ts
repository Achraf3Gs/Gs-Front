import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryDto } from '../../../../gs-api/src/models/category-dto';
import { CategoryRestService } from '../../../../gs-api/src/services';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-page-categories',
  templateUrl: './page-categories.component.html',
  styleUrl: './page-categories.component.scss'
})
export class PageCategoriesComponent implements OnInit{

 listeCategories:Array<CategoryDto>=[]
 errorMessage: Array<string>=[];
  constructor(
    private router:Router,
    private categoryService: CategoryRestService
  ){}

  ngOnInit(): void {
    this.categoryService.findAll5$Response().subscribe({
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
}


