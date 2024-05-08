import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nouvel-article',
  templateUrl: './nouvel-article.component.html',
  styleUrl: './nouvel-article.component.scss'
})
export class NouvelArticleComponent {

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    
  }

  saveClick():void{
    
  }
  cancelClick():void{
    
      this.router.navigate(['articles'])
   
  }
  }
