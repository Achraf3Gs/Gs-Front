import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { UtilisateurDto } from '../../../gs-api/src/models/utilisateur-dto';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
 //nom:string=''
// prenom:string=''
 connectedUser: UtilisateurDto={};
 
  constructor(
  private userService: UserService
  ){ }

  ngOnInit(): void {
    
    this.connectedUser= this.userService.getconnectedUser();
    //this.nom =this.connectedUser.nom || '';
    //this.prenom =this.connectedUser.nom || '';
    console.log(this.connectedUser.nom);
    console.log(this.connectedUser.prenom);
  }

}
