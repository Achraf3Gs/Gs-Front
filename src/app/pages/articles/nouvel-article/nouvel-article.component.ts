import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../../services/artice/article.service';
import { CategoryDto } from '../../../../gs-api/src/models';
import { Save6$Params } from '../../../../gs-api/src/fn/article-rest/save-6';
import { CategoryService } from '../../../services/category/category.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../../../services/user/user.service';
import { FindById8$Params } from '../../../../gs-api/src/fn/article-rest/find-by-id-8';
import { PhotoControllerService } from '../../../../gs-api/src/services';
import { Console } from 'node:console';

@Component({
  selector: 'app-nouvel-article',
  templateUrl: './nouvel-article.component.html',
  styleUrls: ['./nouvel-article.component.scss'],
})
export class NouvelArticleComponent implements OnInit {
  artictleDto: Save6$Params = {
    body: {
      codeArticle: '',
      designation: '',
      id: 0,
      idEntreprise: 0,
      photo: '',
      category: {
        code: '',
        designation: '',
        idEntreprise: 0,
      },
    },
  };

  categoryDto: CategoryDto = {
    code: '',
    designation: '',
    idEntreprise: 0,
  };

  IdArticle: FindById8$Params = {
    idArticle: 0,
  };

  errorMessage: Array<string> = [];
  listeCategories: Array<CategoryDto> = [];
  imgUrl: string | ArrayBuffer = 'assets/product.avif';
  file: File | null = null;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService,
    private categoryService: CategoryService,
    private userService: UserService,
    private photoService: PhotoControllerService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.categoryService.findAll().subscribe({
      next: (data: any) => {
        console.log('liste de Categories:', data.body);
        this.listeCategories = data.body;
      },
      error: (error: any) => {
        this.ErrorHandle(error);
      },
    });

    const idEntreprise = this.userService.getconnectedUser().entreprise?.id;
    if (idEntreprise) {
      this.artictleDto.body.idEntreprise = idEntreprise;
      this.categoryDto.idEntreprise = idEntreprise;
    }

    this.IdArticle.idArticle = this.activatedRoute.snapshot.params['idArticle'];
    console.log('Idarticle', this.IdArticle);
    if (this.IdArticle.idArticle) {
      this.articleService
        .findArticleById(this.IdArticle)
        .subscribe((article) => {
          this.artictleDto = article;
          this.categoryDto = this.artictleDto.body.category || this.categoryDto;
        });
    }
  }

  saveClick(): void {}

  cancelClick(): void {
    this.router.navigate(['articles']);
  }

  enregistrerArticle(): void {
    this.artictleDto.body.category = this.categoryDto;
    this.articleService.enregistrerArticle(this.artictleDto).subscribe({
      next: (data: any) => {
        console.log('-----------------------------------');
        if (this.artictleDto.body.id && this.artictleDto.body.codeArticle) {
          this.savePhoto(
            this.artictleDto.body.id,
            this.artictleDto.body.codeArticle
          );
        }
        this.router.navigate(['articles']);
      },
      error: (error: any) => {
        this.ErrorHandle(error);
      },
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

  calculeTTC(): void {
    if (this.artictleDto.body.tauxTva && this.artictleDto.body.prixUnitaireHt) {
      this.artictleDto.body.prixUnitaireTtc =
        +this.artictleDto.body.prixUnitaireHt +
        +(
          this.artictleDto.body.prixUnitaireHt * this.artictleDto.body.tauxTva
        ) /
          100;
    }
  }

  onfileInput(files: FileList | null): void {
    if (files) {
      this.file = files.item(0);
      if (this.file) {
        const filereader = new FileReader();
        filereader.readAsDataURL(this.file);
        filereader.onload = () => {
          if (filereader.result) this.imgUrl = filereader.result;
        };
      }
    }
  }

  savePhoto(idArticle: number, title: string) {
    if (idArticle && title && this.file) {
      const formData: FormData = new FormData();

      formData.append('context', 'article');
      formData.append('id', idArticle.toString());
      formData.append('file', this.file, this.file.name);
      formData.append('title', title);
      formData.forEach((value, key) => {
        console.log(`${key}:`, value);
      });

      const url = `http://localhost:8082/gestiondestock/v1/save/${idArticle}/${title}/article`;

      this.http.post(url, formData).subscribe({
        next: (data: any) => {
          this.router.navigate(['articles']);
        },
        error: (error: any) => {
          this.ErrorHandle(error);
        },
      });
    } else {
      this.router.navigate(['articles']);
    }
  }
}
