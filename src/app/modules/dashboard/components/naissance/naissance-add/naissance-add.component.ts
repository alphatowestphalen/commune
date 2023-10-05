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
import { PremiereCopie } from '../../../models/premiere-copie'

import { PremiereCopieService } from '../../../services/premiere-copie.service'
import "../../../../../../assets/js/nombrelettre.js";
import { MaireService } from '../../../services/maire.service';
import { Router } from '@angular/router';
import { DatePipe } from "@angular/common";



declare function NombreEnLettre(params: number): any;
declare function MoisMalgache(params: string): any;
declare function HeureEnLettre(params: number): any;
declare function MinuteEnlettre(params: number): any;
declare function LeraEnLettre(params: number): any;
@Component({
  selector: 'app-naissance-add',
  templateUrl: './naissance-add.component.html',
  styleUrls: ['./naissance-add.component.scss'],
})
export class NaissanceAddComponent implements OnInit {
  isLinear = true;
  data: any = [];
  maire: any;
  datenaiss: string | null | undefined;
  lettrenaiss: string | null | undefined;
  sexe: any;
  datenaissMere: string | null | undefined;
  datenaissPere: string | null | undefined;
  datenaissDeclarant: string | null | undefined;
  dateCopie: string | null | undefined;
  heureCopie: string | null | undefined;
  heurenaiss: string | null | undefined;
  dateregistre: string | null | undefined;
  MaireSelected: any = [];
  NumeroCopie: number;
  heureregistre: string | null | undefined;
  checked: boolean = true;
  isPere: boolean = true;


  NumCopie: any;
  enableMeridian: boolean = true;
  constructor(private datePipe: DatePipe, private _formBuilder: FormBuilder, public dialog: MatDialog, private maireservice: MaireService, private premierecopieservice: PremiereCopieService) { }

  PiecesFormGroup = this._formBuilder.group({
    certificatAccouch: true,
    livretFamille: true,
    cinMere: true,
    cinDeclarant: true

  });
  today = new Date();
  CopieFormGroup = this._formBuilder.group({
    idPremierCopie: 0,
    description: [''],
    datePremierCopie: this.today.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    }),
    heurePremierCopie: this.today.toLocaleTimeString('fr-FR', {
      hour: 'numeric',
      minute: 'numeric'
    }),
    mention: [''],
    createdDate: this.today,
    lettreBirth: ['',],
    LettreRegistre: ['',],
    avoirPere: true,
    datePCopie: ['',]
  });

  EnfantFormGroup = this._formBuilder.group({
    nomEnfant: [''],
    prenomsEnfant: '',
    datenaissEnfant: [''],
    lieunaissEnfant: [''],
    heurenaissEnfant: [''],
    dateEnfant: [''],
    heureEnfant: [''],
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
    avoirPere: true,
  });

  MereFormGroup = this._formBuilder.group({
    nomMere: [''],
    prenomsMere: '',
    datenaissMere: [''],
    dateMere: [''],
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
    this.getLastNumPremierCopie();
    console.log('==================local hostse==================');
    console.log(this.CopieFormGroup.value.datePremierCopie + ' ' + this.CopieFormGroup.value.heurePremierCopie);
    console.log('====================================');
  }

  openDialog() {
    if (
      this.EnfantFormGroup.valid &&
      this.DeclarantFormGroup.valid &&
      this.MaireFormGroup.valid &&
      this.MereFormGroup.valid &&
      this.PereFormGroup.valid &&
      this.PiecesFormGroup.valid
    ) {
      this.EnfantFormGroup.value.dateEnfant = this.datenaiss
      this.EnfantFormGroup.value.heureEnfant = this.heurenaiss
      this.EnfantFormGroup.value.sexeEnfant = this.sexe
      this.MereFormGroup.value.dateMere = this.datenaissMere
      this.PereFormGroup.value.datePere = this.datenaissPere
      this.DeclarantFormGroup.value.dateDeclarant = this.datenaissDeclarant
      this.MaireFormGroup.value.dateregistre = this.dateregistre
      this.CopieFormGroup.value.idPremierCopie = this.NumeroCopie
      this.CopieFormGroup.value.lettreBirth = this.lettrenaiss
      this.CopieFormGroup.value.LettreRegistre = this.heureregistre
      this.CopieFormGroup.value.avoirPere = this.isPere
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
        data: this.data
      });
    }

    console.log(this.data);
  }
// Function to format the date

  Step() {
    const date: any = this.CopieFormGroup.value.datePremierCopie?.split("/")
    this.dateCopie = NombreEnLettre(date[0]).concat(' ', MoisMalgache(date[1])).concat(' ', NombreEnLettre(date[2]));
    const heure: any = this.CopieFormGroup.value.heurePremierCopie?.split(':')
    const heureCopie = HeureEnLettre(heure[0]);
    const minuteCopie = MinuteEnlettre(heure[1]);
    const ora = LeraEnLettre(heure[0]);
    this.heureCopie = heureCopie + minuteCopie + ora;
    
    
    this.heureregistre = HeureEnLettre(heure[0]).concat(' ', MinuteEnlettre(heure[1]).concat(' ', LeraEnLettre(heure[0])));
    const datenaiss = NombreEnLettre(date[0]).concat(' ', MoisMalgache(date[1]))
    this.dateregistre = datenaiss.concat(' ', NombreEnLettre(date[2]))
    return this.dateregistre, this.heureregistre

  }

  FirstStep() {
    const date: any = this.EnfantFormGroup.value.datenaissEnfant?.split("-")
    const heure: any = this.EnfantFormGroup.value.heurenaissEnfant?.split(":")
    this.datenaiss = NombreEnLettre(date[2]).concat(' ', MoisMalgache(date[1])).concat(' ', NombreEnLettre(date[0]))
    const heurenaiss = HeureEnLettre(heure[0]);
    const minutenaiss = MinuteEnlettre(heure[1]);
    const oranaiss = LeraEnLettre(heure[0]);
    this.heurenaiss = heurenaiss + minutenaiss + oranaiss;
    this.lettrenaiss = date[2].concat(' ', MoisMalgache(date[1])).concat(' ', date[0])
    console.log(this.heurenaiss, this.lettrenaiss)
       if (this.EnfantFormGroup.value.sexeEnfant == "fille") {

   	this.sexe = "fille";

   } else {
    	this.sexe = "garçon";
   }
    return this.datenaiss, this.lettrenaiss, this.sexe
  }

  SecondStep() {
    const mere: any = this.MereFormGroup.value.datenaissMere?.split("-")
    const datenaiss = NombreEnLettre(mere[2]).concat(' ', MoisMalgache(mere[1]))
    this.datenaissMere = datenaiss.concat(' ', NombreEnLettre(mere[0]))
    console.log(this.datenaissMere)
    return this.datenaissMere
  }

  ThirtyStep() {
    const pere: any = this.PereFormGroup.value.datenaissPere?.split("-")
    const datenaiss = NombreEnLettre(pere[2]).concat(' ', MoisMalgache(pere[1]))
    this.datenaissPere = datenaiss.concat(' ', NombreEnLettre(pere[0]))
    console.log(this.datenaissPere)
    return this.datenaissPere
  }

  FortyStep() {
    const declarant: any = this.DeclarantFormGroup.value.datenaissDeclarant?.split("-")
    const datenaiss = NombreEnLettre(declarant[2]).concat(' ', MoisMalgache(declarant[1]))
    this.datenaissDeclarant = datenaiss.concat(' ', NombreEnLettre(declarant[0]))
    console.log(this.datenaissDeclarant)
    return this.datenaissDeclarant
  }
  FiveStep() {
    const date = new Date(Date.now()).toLocaleString().split(',')[0];
    
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

  getAllMaire() {
    this.maireservice.getAllMaire().subscribe(data => {
      this.maire = data;
    })
  }

  getLastNumPremierCopie() {
    this.premierecopieservice.getLastIdCerticate().subscribe(data => {
      this.NumeroCopie = data
    })
    this.PereFormGroup.value.avoirPere = true;
    this.CopieFormGroup.value.idPremierCopie = this.NumeroCopie
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
      .subscribe(data => {
        this.MaireFormGroup.value.prenomsMaire = data.prenomsMaire;
        this.MaireFormGroup.value.fonction = data.fonction;
        console.log(data);
      })
    this.MaireSelected = this.MaireSelected;


  }

  onCheckboxChange(event: any) {
    this.checked = event.target.checked;
    if (this.checked) {
      this.isPere = true;

    } else {
      this.isPere = false
    }
  }



}





@Component({
  selector: 'affiche-copie',
  templateUrl: 'affiche-copie.component.html',
})
export class AfficheCopieComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private premierecopieservice: PremiereCopieService,
    public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }

  formatDateString(dateStr: string): string {
    const parts = dateStr.split('/');
    console.log('====================================');
    console.log(parts);
    console.log('====================================');
    if (parts.length === 3) {
      const day = parts[0];
      const month = parts[1];
      const year = parts[2];
      return `${year}-${month}-${day}`;
    } else {
      return 'Invalid Date';
    }
  }
  saveCertificate() {
    const dateYMD = this.formatDateString(this.data.datePremierCopie) 
    this.data.datePremierCopie = dateYMD;
    
    this.premierecopieservice.addFirstCertificates(this.data).subscribe(data => {
      const dialogRef = this.dialog.closeAll();
      this.router.navigate(['/dashboard/premiere-copie']);
    })
    console.log(this.data)

  }
}


