import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../../services/user/user.service';
import { ChangerMotDePasse$Params } from '../../../../gs-api/src/fn/utilisateur-rest/changer-mot-de-passe';


@Component({
  selector: 'app-changer-mot-de-passe',
  templateUrl: './changer-mot-de-passe.component.html',
  styleUrl: './changer-mot-de-passe.component.scss'
})
export class ChangerMotDePasseComponent {
 
  
  changerMotDePasse: ChangerMotDePasse$Params= {
    body: {
      id:0,
      confirmMotDePasse: '',
      motDePasse:''
      } 

}

  //changerMotDePassDto : ChangerMotDePasseUtilisateurDto={}
  ancienMotDePass=""
  constructor(
    private userService:UserService,
    private router: Router
  ){}

  ngOnInit(): void {
    if (localStorage.getItem('origin')&& localStorage.getItem('origin')==='inscription'){
      this.ancienMotDePass="12345";
      localStorage.removeItem('origin');
    }
  }

  saveClick():void{
    
  }
  cancelClick():void{
    
      this.router.navigate(['profil'])
   
  }
  changerMotDePassUtilisateur():void{
    this.changerMotDePasse.body.id= this.userService.getconnectedUser().id
    console.log(this.changerMotDePasse)
    this.userService.changerMotDePass(this.changerMotDePasse).subscribe({
      next: (data: any) => {
        this.router.navigate(['profil']);
      }
    })
  }
  }