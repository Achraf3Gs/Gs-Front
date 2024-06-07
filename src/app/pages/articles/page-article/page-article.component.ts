import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../../../services/artice/article.service';
import { ArticleDto } from '../../../../gs-api/src/models';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-page-article',
  templateUrl: './page-article.component.html',
  styleUrl: './page-article.component.scss'
})
export class PageArticleComponent implements OnInit{

  listeArticles:Array<ArticleDto>=[]
  errorMessage: Array<string>=[];
  constructor(
    private router:Router,
    private articleService: ArticleService
  ){}

  ngOnInit(): void {
    this.findAllArticles()
    
  }
 

  nouvelArticle():void{
  this.router.navigate(['nouvelarticle']);
  }

  findAllArticles():void{
    this.articleService.findAllArticles().subscribe({
      next: (data: any) => {
        console.log('liste des Articles:', data.body);
       this.listeArticles=data.body;
      },
      error: (error: any) => {
        console.error('Error occurred:', error);
        this.ErrorHandle(error);
        
    }
    });
  }
  handleSuppression(event: any): void {
    if (event.result === 'success') {
      this.findAllArticles()
      } else {
      this.errorMessage = event;
    }
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


