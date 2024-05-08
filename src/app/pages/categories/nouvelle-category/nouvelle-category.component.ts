import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvelle-category',
  templateUrl: './nouvelle-category.component.html',
  styleUrl: './nouvelle-category.component.scss'
})
export class NouvelleCategoryComponent {

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    
  }

  saveClick():void{
    
  }
  cancelClick():void{
    
      this.router.navigate(['categories'])
   
  }
  }
