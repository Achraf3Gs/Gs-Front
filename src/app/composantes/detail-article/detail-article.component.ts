import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticleDto, CategoryDto } from '../../../gs-api/src/models';
import { Router } from '@angular/router';
import { ArticleService } from '../../services/artice/article.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrl: './detail-article.component.scss',
})
export class DetailArticleComponent implements OnInit {
  @Input()
  articleDto: ArticleDto = {};

  @Output()
  suppressionReuslt = new EventEmitter();

  listeArticles: Array<ArticleDto> = [];

  errorMessage: Array<string> = [];

  constructor(private router: Router, private articleService: ArticleService) {}

  ngOnInit(): void {}

  modifierArticle(id: any): void {
    this.router.navigate(['nouvelarticle', id]);
  }

  ConfirmerEtSupprimerArt(): void {
    if (this.articleDto.id) {
      console.log('Deleting article with ID:', this.articleDto.id);
      this.articleService.deleteArticle(this.articleDto.id).subscribe({
        next: (res: any) => {
          console.log('Delete successful:', res);
          // this.suppressionReuslt.emit('success');
          this.suppressionReuslt.emit({
            result: 'success',
            articles: this.listeArticles,
          });
          console.log('listeArticles', this.listeArticles);
        },
        error: (error: any) => {
          console.error('Error occurred while deleting article:', error);
          if (error instanceof HttpErrorResponse) {
            if (error.status === 400 && error.error) {
              try {
                const errorResponse = JSON.parse(error.error);
                console.log('Error Response:', errorResponse);
                const errorMessage = errorResponse.message || [
                  'An error occurred while deleting the article.',
                ];
                console.error(errorMessage);
                this.errorMessage = [errorMessage];
                this.suppressionReuslt.emit(this.errorMessage);
              } catch (e) {
                this.errorMessage = [
                  'An unknown error occurred while parsing the error response.',
                ];
                console.error('Error parsing response:', e);
              }
            } else {
              const errorMessage = [
                'An unknown error occurred while deleting the article.',
              ];
              console.error(errorMessage);
              this.errorMessage = errorMessage;
            }
          } else {
            const errorMessage = ['An unknown error occurred.'];
            console.error(errorMessage);
            this.errorMessage = errorMessage;
          }
        },
      });
    } else {
      console.log('Invalid SelectedArToDelete value:', this.articleDto.id);
    }
  }
}
