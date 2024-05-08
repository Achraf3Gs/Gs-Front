import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changer-mot-de-passe',
  templateUrl: './changer-mot-de-passe.component.html',
  styleUrl: './changer-mot-de-passe.component.scss'
})
export class ChangerMotDePasseComponent {

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    
  }

  saveClick():void{
    
  }
  cancelClick():void{
    
      this.router.navigate(['profil'])
   
  }
  }