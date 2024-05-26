import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../../services/artice/article.service';
import { CategoryDto } from '../../../../gs-api/src/models';
import { Save6$Params } from '../../../../gs-api/src/fn/article-rest/save-6';
import { CategoryService } from '../../../services/category/category.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../../../services/user/user.service';


@Component({
  selector: 'app-nouvel-article',
  templateUrl: './nouvel-article.component.html',
  styleUrl: './nouvel-article.component.scss'
})
export class NouvelArticleComponent {
  artictleDto: Save6$Params ={
    body:{
      codeArticle: '',
      designation:'',
      id: 0,  // Assuming id should be an integer
      idEntreprise: 0,
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
errorMessage: Array<string>=[];
listeCategories:Array<CategoryDto>=[]
  constructor(
    private router: Router,
    private activatedRoute:ActivatedRoute,
    private articleService: ArticleService,
    private categoryService: CategoryService,
    private userService:UserService
  ){}

  ngOnInit(): void {
      this.categoryService.findAll().subscribe({
        next: (data: any) => {
          console.log('liste de Categories:', data.body);
         this.listeCategories=data.body;
        },
        error: (error: any) => {
         this.ErrorHandle(error)
      }
      });
      const idEntreprise = this.userService.getconnectedUser().entreprise?.id;  // Implement this method to get the correct idEntreprise
      if (idEntreprise) {
        this.artictleDto.body.idEntreprise = idEntreprise;
        this.categoryDto.idEntreprise = idEntreprise;
      }
    }
  

  saveClick():void{
    
  }
  cancelClick():void{
    
      this.router.navigate(['articles'])
   
  }
  enregistrerArticle():void{
      this.artictleDto.body.category= this.categoryDto
      this.articleService.enregistrerArticle(this.artictleDto).subscribe({
        next: (data: any) => {
          console.log('Category created successfully:', data);
          this.router.navigate(['articles']);
        },
        error: (error: any) => {
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

  

  
