import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-utilisateur',
  templateUrl: './nouveau-utilisateur.component.html',
  styleUrl: './nouveau-utilisateur.component.scss'
})
export class NouveauUtilisateurComponent {

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    
  }

  saveClick():void{
    
  }
  cancelClick():void{
    
      this.router.navigate(['utilisateurs'])
   
  }
  }