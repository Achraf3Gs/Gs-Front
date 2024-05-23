import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { UtilisateurDto } from '../../../gs-api/src/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
 
 connectedUser: UtilisateurDto={};
 
  constructor(
  private userService: UserService
  ){ }

  ngOnInit(): void {
    this.connectedUser= this.userService.getconnectedUser();
    console.log(this.connectedUser.nom);
    console.log(this.connectedUser.prenom);
  }

}
