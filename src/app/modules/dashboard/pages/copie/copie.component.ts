import { Component, Input, OnInit } from '@angular/core';
import { Copie } from '../../models/copie';
import "src/assets/js/nombrelettre.js"

declare function NombreEnLettre(params:number)  : any;
declare function MoisMalgache(params: string) : any;
declare function HeureEnLettre(params: number) : any;
declare function MinuteEnlettre(params: number): any;
declare function LeraEnLettre(params: number): any;
@Component({
  selector: 'app-copie',
  templateUrl: './copie.component.html',
  styleUrls: ['./copie.component.scss']
})
export class CopieComponent implements OnInit {
  @Input()
  copie: any;

  datenaiss:string;
  heurenaiss:string;
  lettrenaiss: string;
  sexe: string;
  
  
  constructor() { }

  ngOnInit(): void {
 this.DateNaiss();
 this.SexeEnfant()
  console.log(this.copie);
  }

  DateNaiss(){
    const date:any  = this.copie.enfant.datenaissEnfant?.split("-") 
    const heure:any = this.copie.enfant.heurenaissEnfant?.split(":")
    this.datenaiss = NombreEnLettre(date[2]).concat(' ',MoisMalgache(date[1])).concat(' ', NombreEnLettre(date[0]))
    const heurenaiss = HeureEnLettre(heure[0]);
    const minutenaiss = MinuteEnlettre(heure[1]);
    const oranaiss = LeraEnLettre(heure[0]);
    this.heurenaiss = heurenaiss + minutenaiss + oranaiss;
   this.lettrenaiss = date[2].concat(' ',MoisMalgache(date[1])).concat(' ',date[0])
    console.log(this.heurenaiss, this.lettrenaiss)
 return this.datenaiss, this.lettrenaiss
  }

  SexeEnfant(){
   if (this.copie.enfant.sexeEnfant == "fille") {

   return this.sexe = "zazavavy";
    
   } else {
    return this.sexe = "zazalahy";
   }
}
}