import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-profil',
  templateUrl: './page-profil.component.html',
  styleUrl: './page-profil.component.scss'
})
export class PageProfilComponent implements OnInit{

  constructor(
    private route:Router
  ){}
  ngOnInit(): void {
  }
    modifierMotdePasse():void{
     this.route.navigate(['changermotdepasse']);
    }
  }

