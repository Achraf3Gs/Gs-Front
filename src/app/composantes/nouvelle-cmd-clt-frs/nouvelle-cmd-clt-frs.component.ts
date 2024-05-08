import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nouvelle-cmd-clt-frs',
  templateUrl: './nouvelle-cmd-clt-frs.component.html',
  styleUrl: './nouvelle-cmd-clt-frs.component.scss'
})
export class NouvelleCmdCltFrsComponent {
  origin='';

  constructor(
    private router:Router,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data=>{
      this.origin = data['origin'];
    });
  }

  nouvelleCommande():void{
  this.router.navigate(['nouvellecommande']);
  }

  saveClick():void{
    
  }
  cancelClick():void{
    if (this.origin==='client'){
      this.router.navigate(['commandesclient'])
    }else if(this.origin==='fournisseur'){
      this.router.navigate(['commandesfournisseur'])
    }
  }
}

