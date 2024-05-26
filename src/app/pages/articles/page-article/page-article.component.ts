import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../../../services/artice/article.service';
import { ArticleDto } from '../../../../gs-api/src/models';

@Component({
  selector: 'app-page-article',
  templateUrl: './page-article.component.html',
  styleUrl: './page-article.component.scss'
})
export class PageArticleComponent implements OnInit{

  listeArticles:Array<ArticleDto>=[]
  constructor(
    private router:Router,
    private articleService: ArticleService
  ){}

  ngOnInit(): void {
    ;
  }

  nouvelArticle():void{
  this.router.navigate(['nouvelarticle']);
  }

  findAllArticles():void{
}

}
