import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'
import {PremiereCopie} from '../../../models/premiere-copie'

import {PremiereCopieService} from '../../../services/premiere-copie.service'
import "../../../../../../assets/js/nombrelettre.js";
import { MaireService } from '../../../services/maire.service';
import { Router } from '@angular/router';


declare function NombreEnLettre(params:number)  : any;
declare function MoisMalgache(params: string) : any
@Component({
  selector: 'app-naissance-add',
  templateUrl: './naissance-add.component.html',
  styleUrls: ['./naissance-add.component.scss'],
})
export class NaissanceAddComponent implements OnInit {
  isLinear = true;
  data: any;
  maire: any;
  datenaiss: string | null | undefined;
  datenaissMere: string | null | undefined;
  datenaissPere: string | null | undefined;
  datenaissDeclarant: string | null | undefined;
  dateregistre: string | null | undefined;
  MaireSelected: any= [];

  NumCopie: any;

  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog, private maireservice: MaireService,  private premierecopieservice: PremiereCopieService  ) {}

  PiecesFormGroup = this._formBuilder.group({
      certificatAccouch: true,
      livretFamille: true,
      cinMere: true,
      cinDeclarant: true

  });
  today = new Date();
  CopieFormGroup = this._formBuilder.group({
    idPremierCopie: new FormControl(),
    description: [''],
    datePCopie: this.today,
    datePremierCopie:this.today,
    mention: [''],

  });

  EnfantFormGroup = this._formBuilder.group({
    nomEnfant: [''],
    prenomsEnfant: '',
    datenaissEnfant: [''],
    lieunaissEnfant: [''],
    heurenaissEnfant: [''],
    dateEnfant: [''],
    sexeEnfant: [''],
  });

  PereFormGroup = this._formBuilder.group({
    nomPere: '',
    prenomsPere: '',
    datenaissPere: '',
    datePere: '',
    lieuNaissPere: '',
    professionPere: '',
    adressePere: '',
  });

  MereFormGroup = this._formBuilder.group({
    nomMere: [''],
    prenomsMere: '',
    datenaissMere: [''],
    dateMere:[''],
    lieuNaissMere: [''],
    professionMere: [''],
    adresseMere: [''],
  });
  DeclarantFormGroup = this._formBuilder.group({
    nomDeclarant: [''],
    prenomsDeclarant: '',
    datenaissDeclarant: [''],
    professionDeclarant: [''],
    dateDeclarant: [''],
    lieuNaissDeclarant: [''],
    adressDeclarant: [''],
  });
  MaireFormGroup = this._formBuilder.group({
    idMaire: [''],
    nomMaire: [''],
    prenomsMaire: new FormControl(),
    fonction: new FormControl(),
    dateregistre: ['']
  });
  
  @ViewChild('htmlData') htmlData!: ElementRef;
  ngOnInit(): void {
   this.getAllMaire();
  }

  openDialog() {
   this.FiveStep();

    if (
      this.EnfantFormGroup.valid &&
      this.DeclarantFormGroup.valid &&
      this.MaireFormGroup.valid &&
      this.MereFormGroup.valid &&
      this.PereFormGroup.valid &&
      this.PiecesFormGroup.valid
    ) {
      this.EnfantFormGroup.value.dateEnfant =  this.datenaiss
      this.MereFormGroup.value.dateMere =  this.datenaissMere
      this.PereFormGroup.value.datePere =  this.datenaissPere
      this.DeclarantFormGroup.value.dateDeclarant =  this.datenaissDeclarant
      this.MaireFormGroup.value.dateregistre = this.dateregistre
      this.data = {
        ...this.CopieFormGroup.value,
        ...this.EnfantFormGroup.value,
        ...this.DeclarantFormGroup.value,
        ...this.MaireFormGroup.value,
        ...this.PereFormGroup.value,
        ...this.MereFormGroup.value,
        ...this.PiecesFormGroup.value,
      };
      const dialogRef = this.dialog.open(AfficheCopieComponent, {
        maxWidth: '100vw',
        maxHeight: '100vh',
        height: '90%',
        width: '85%',
        panelClass: 'full-screen-modal',
        data : this.data
      });
    }

    // console.log(this.data);
  }

  FirstStep( ) {
    const enfant:any  = this.EnfantFormGroup.value.datenaissEnfant?.split("-") 
   const datenaiss = NombreEnLettre(enfant[2]).concat(' ',MoisMalgache(enfant[1]))
    this.datenaiss = datenaiss.concat(' ',NombreEnLettre(enfant[0]) )
    console.log(this.datenaiss )
 return this.datenaiss
  }

  SecondStep( ) {
    const mere:any  = this.MereFormGroup.value.datenaissMere?.split("-") 
   const datenaiss = NombreEnLettre(mere[2]).concat(' ',MoisMalgache(mere[1]))
    this.datenaissMere = datenaiss.concat(' ',NombreEnLettre(mere[0]) )
    console.log(this.datenaissMere )
 return this.datenaissMere
  }
  
  ThirtyStep( ) {
    const pere:any  = this.PereFormGroup.value.datenaissPere?.split("-") 
   const datenaiss = NombreEnLettre(pere[2]).concat(' ',MoisMalgache(pere[1]))
    this.datenaissPere = datenaiss.concat(' ',NombreEnLettre(pere[0]) )
    console.log(this.datenaissPere )
 return this.datenaissPere
  }
  
  FortyStep( ) {
    const declarant:any  = this.DeclarantFormGroup.value.datenaissDeclarant?.split("-") 
   const datenaiss = NombreEnLettre(declarant[2]).concat(' ',MoisMalgache(declarant[1]))
    this.datenaissDeclarant = datenaiss.concat(' ',NombreEnLettre(declarant[0]) )
    console.log(this.datenaissDeclarant )
 return this.datenaissDeclarant
  }
  FiveStep( ) {
    const date =new Date(Date.now()).toLocaleString().split(',')[0];
    const enfant:any  = date.split(" ");
    const currentdate = enfant[0].split("/");
   
   const datenaiss = NombreEnLettre(currentdate[0]).concat(' ',MoisMalgache(currentdate[1]))
    this.dateregistre = datenaiss.concat(' ',NombreEnLettre(currentdate[2]) )
    console.log(this.dateregistre)
 return this.dateregistre
  }

  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    console.log(DATA);
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }

  getAllMaire(){
    this.maireservice.getAllMaire().subscribe(data=>{
      this.maire = data;
    })
  }

  getLastNumPremierCopie(){
    this.premierecopieservice.getLastIdCerticate().subscribe(data=>{
      this.CopieFormGroup.value.idPremierCopie = data
      console.log(data)
    })
    }
  printPage() {
    var printContents = document.getElementById('htmlData')!.innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
  }

  onSelected(value: any) {
    this.maireservice.getMaireById(value)
    .subscribe(data=>{
      this.MaireFormGroup.value.prenomsMaire= data.prenomsMaire;
      this.MaireFormGroup.value.fonction = data.fonction;
      console.log(data);
    })
    this.MaireSelected = this.MaireSelected;
   

  }

 test(){
  console.log(this.CopieFormGroup.value)
 }
  

}





@Component({
  selector: 'affiche-copie',
  templateUrl: 'affiche-copie.component.html',
})
export class AfficheCopieComponent {
  constructor(@Inject (MAT_DIALOG_DATA) public data: any, private premierecopieservice: PremiereCopieService,
   public dialog: MatDialog, private router:Router  ) {}

  ngOnInit() {
  console.log(this.data)
  }
  saveCertificate(){
  
    this.premierecopieservice.addFirstCertificates(this.data).subscribe(data=>{

      const dialogRef = this.dialog.closeAll();
      this.router.navigate(['/dashboard/premiere-copie']);
    })
    console.log(this.data)

  }
}


