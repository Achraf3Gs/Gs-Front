import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page-utilisateur',
  templateUrl: './page-utilisateur.component.html',
  styleUrl: './page-utilisateur.component.scss'
})
export class PageUtilisateurComponent implements OnInit{

  constructor(
    private router:Router
  ){}

  ngOnInit(): void {
    ;
  }

  nouveauUtilisateur():void{
  this.router.navigate(['nouveauutilisateur']);
  }
}