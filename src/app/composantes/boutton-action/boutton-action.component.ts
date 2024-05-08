import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-boutton-action',
  templateUrl: './boutton-action.component.html',
  styleUrl: './boutton-action.component.scss'
})
export class BouttonActionComponent implements OnInit{

@Input()
isImporterVisible=true;
@Input()
isExporterVisible=true;
@Input()
isNouveauVisible=true;


  @Output()
  clickEvent= new EventEmitter();

  constructor(){}

  ngOnInit(): void {
    ;
  }

  bouttonNouveauClick():void{
    this.clickEvent.emit();
  }

}
