import { Component, Input, OnInit } from '@angular/core';
import "src/assets/js/nombrelettre.js"

declare function NombreEnLettre(params:number)  : any;
declare function MoisMalgache(params: string) : any;
declare function HeureEnLettre(params: number) : any;
declare function MinuteEnlettre(params: number): any;
declare function LeraEnLettre(params: number): any;
@Component({
  selector: 'app-copie-mariage',
  templateUrl: './copie-mariage.component.html',
  styleUrls: ['./copie-mariage.component.scss']
})
export class CopieMariageComponent implements OnInit {
  @Input()
  mariage: any;

  datemariage :string;
  dateMariage: string;
  heureMariage: string;

  constructor() { }

  ngOnInit(): void {
    this.DateMariage();
    this.Date();
    this.Heure();
  }

  DateMariage( ) {
    const enfant:any  = this.mariage.dateMariage?.split("/") 

   const datenaiss = NombreEnLettre(enfant[0]).concat(' ',MoisMalgache(enfant[1]))
    this.datemariage = datenaiss.concat(' ',NombreEnLettre(enfant[2]) )
    // const heurenaiss = HeureMalgache(heureEnfant)
    console.log(this.datemariage)

 return this.datemariage
  }

  Date(){
    const date: any = this.mariage.dateMariage?.split("/")
    this.dateMariage = date[0].concat(' ',MoisMalgache(date[1])).concat(' ', date[2])
    console.log(this.dateMariage)
    return this.dateMariage;
  }


  Heure(){
    const heure:any  = this.mariage.heureMariage?.split(":")
   const heuremalgache = HeureEnLettre(heure[0]);
   const minute = MinuteEnlettre(heure[1]);
   const lera = LeraEnLettre(heure[0]);
   this.heureMariage = heuremalgache + minute + lera;
   console.log(heuremalgache + minute + lera);
    return this.heureMariage; 
  }
}
