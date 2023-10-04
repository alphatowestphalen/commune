import { Component, Input, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
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
  htmlData: any;
  htmlDataRendered: false;
  imageCanevas: string;
  dateNaissMere: any | null | undefined;
  dateNaissPere: any | null | undefined;
  datenaissDeclarant: any | null | undefined;
  hCreation:any;
  heur:any;

  constructor() { }

  ngOnInit(): void {
 this.DateNaiss();
 this.DateNaissPere();
 this.DateNaissMere();
 this.DatenaissDeclarant();
 this.HCreation();
 this.SexeEnfant();
  console.log(this.copie);
  }

  genererCanevas() {
    const doc = new jsPDF();
    const element = document.querySelector('.page#htmlData') as HTMLElement;
    if (element) {
      html2canvas(element).then((canevas) => {
        // console.log("Canevas genereeee !");

        const imgData = canevas.toDataURL('image/png');
        const imgWidth = 210;
        const pageHeight = 300;
        const imgHeight = canevas.height * imgWidth / canevas.width;
        let heightLeft = imgHeight;

        let position = 0;
        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          doc.addPage();
          doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        doc.save("Copie_de_"+this.copie.enfant.nomEnfant+" "+this.copie.enfant.prenomsEnfant+".pdf");
        // console.log("PDF enregistré !");
    });
  }
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
 return this.datenaiss, this.lettrenaiss, this.dateNaissPere, this.dateNaissMere
  }

  DateNaissPere(){
    const date1:any = this.copie.pere.dateNaissPere?.split("-")

  this.dateNaissPere = NombreEnLettre(date1[2]).concat(' ',MoisMalgache(date1[1])).concat(' ', NombreEnLettre(date1[0]))


 return this.dateNaissPere;
  }

  DateNaissMere(){
    const date2:any = this.copie.mere.dateNaissMere?.split("-")

  this.dateNaissMere = NombreEnLettre(date2[2]).concat(' ',MoisMalgache(date2[1])).concat(' ', NombreEnLettre(date2[0]))


 return this.dateNaissMere;
  }
  
  DatenaissDeclarant(){
    const date3:any = this.copie.declarant.datenaissDeclarant?.split("-")

  this.datenaissDeclarant = NombreEnLettre(date3[2]).concat(' ',MoisMalgache(date3[1])).concat(' ', NombreEnLettre(date3[0]))


 return this.datenaissDeclarant;
  }
  
  HCreation(){
    	const dateCreation = new Date(this.copie.createdDate);
    	const hours = dateCreation.getHours();
    	const minutes = dateCreation.getMinutes();
	const seconds = dateCreation.getSeconds();
    	
    	if(hours<10){
    	
    	const entier: number = hours;

	const entierString: string = entier.toString();

	const HeurAvecZero: string = entierString.length === 1 ? '0' + entierString : entierString;

	
	this.heur = HeurAvecZero +":"+minutes;
    		
    	} else {
    	
    	this.heur = hours +":"+minutes;
    	
    	}
    	
  	const heure2 = this.heur?.split(":")
    	    	
    	const heureCreat = HeureEnLettre(heure2[0]);
    	
    	const minuteCreat = MinuteEnlettre(heure2[1]);
	
    	const oraCreat = LeraEnLettre(heure2[0]);
    	
    	this.hCreation = heureCreat + minuteCreat + oraCreat;
	
    return this.hCreation;
  }

  SexeEnfant(){
   if (this.copie.enfant.sexeEnfant == "fille") {

   return this.sexe = "zazavavy";

   } else {
    return this.sexe = "zazalahy";
   }
}

}
