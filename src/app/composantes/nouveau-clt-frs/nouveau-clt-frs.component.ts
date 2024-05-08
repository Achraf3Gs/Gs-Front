import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-nouveau-clt-frs',
  templateUrl: './nouveau-clt-frs.component.html',
  styleUrl: './nouveau-clt-frs.component.scss'
})
export class NouveauCltFrsComponent {

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

  nouvelleCommande(): void{
    if(this.origin==='client'){
      this.router.navigate(['nouvellecommandeclt']);
    }else if (this.origin==='fournisseur'){
      this.router.navigate(['nouveaufournisseur']);
    }
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
