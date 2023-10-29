import { Component, Inject, OnInit } from '@angular/core';
import { PremiereCopieService } from 'src/app/modules/dashboard/services/premiere-copie.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import { DecesService } from '../../../services/deces.service';
import { MaireService } from '../../../services/maire.service';
import { MaireInterface } from 'src/app/model/mariage/MariageInterface.interface';
import { DeceeInterface } from 'src/app/model/decee/decee.interface';


declare function NombreEnLettre(params: number): any;
declare function MoisMalgache(params: string): any

@Component({
  selector: 'app-deces-add',
  templateUrl: './deces-add.component.html',
  styleUrls: ['./deces-add.component.scss']
})
export class DecesAddComponent implements OnInit {
  deces: any;
  certificate: any;
  maireInterface: any;
  idPremierCopie = new FormControl();
  deceInterface: DeceeInterface = {
    dateDeclaration: '',
    idPremierCopie: '',
    heureDeclaration: '',
    nomDeclarant: '',
    prenomsDeclarant: '',
    professionDeclarant: '',
    lieuNaissanceDeclarant: '',
    adresseDeclarant: '',
    dateNaissanceDeclarant: '',
    date: '',
    idMaire: 0,
    nomDefunt: '',
    dateDeNaissDefunt: '',
    lieuDeNaissDefunt: '',
    cinDefunt: '',
    dateCinDefunt: '',
    lieuCinDefunt: '',
    professionDefunt: '',
    adresseDefunt: '',
    nomMereDefunt: '',
    nomPereDefunt: '',
    dateDeces: '',
    lieuDeces: '',
    heureDeces: '',
    dateEnterement: '',
    heureEnterement: '',
    lieuEnterement: '',
    communeEnterement: '',
    regionEnterement: '',
    nomPiece: true,
    fasanDehibe: true,
    prenomDefunt: ''
  };

  filteredMovies: any = [];
  isLoading = false;
  errorMsg!: string;
  minLengthTerm = 1;
  CopieSelected: any = "";
  data: any;
  date:any;
  params:any;
  datenaiss: string | null | undefined;
  datenaissMere: string | null | undefined;
  datenaissPere: string | null | undefined;
  datenaissDeclarant: string | null | undefined;
  dateregistre: string | null | undefined;

  constructor(private maireService: MaireService ,private activeRoute:ActivatedRoute , private _formBuilder: FormBuilder,private decesservice: DecesService, private premierecopie: PremiereCopieService, public dialog: MatDialog,private router: Router) { }

  PiecesFormGroup = this._formBuilder.group({});

  EnfantFormGroup = this._formBuilder.group({
    dateMere: '',
    datePere: [''],
    dateDeclarant: [''],
    dateEnfant: [''],
    dateregistre: ['']
  });

  DecesFormGroup = this._formBuilder.group({
    dateDeces: [''],
    lieuDeces: [''],
    heureDeces: [''],
    professionDefunt: [''],
    adresseDefunt:[''],

    createdDate: new Date()
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

  ngOnInit(): void { 
    this.getParams();
    this.date = new Date();
    this.deceInterface.date = this.date;
    this.getAllFirstCertificate();
    this.getAllMaire();
  }

  getAllFirstCertificate() {
    this.premierecopie.getAllPersonliving()
      .subscribe(data => {
        this.deces = data.data
      })
  }

   getParams(){
    this.activeRoute.paramMap.subscribe(param => {
        this.params = param.get('id');
        this.getPremierCopieById(this.params);
    })
   }
   
  private getAllMaire(){
    this.maireService.getAllMaire().subscribe(data=>{
      this.maireInterface = data
      console.log(this.maireInterface)
    })
  }

  onSelectedMaire(value: any) {
    this.maireService.getMaireById(value).subscribe(data=>{
      this.deceInterface.idMaire = data.idMaire;
    })
  }

  Onchange($event: any) {
    this.premierecopie.getCertificateByID($event.value)
      .subscribe(data => {
        this.deceInterface.nomDefunt = data.enfant.nomEnfant;
        this.deceInterface.prenomDefunt = data.enfant.prenomsEnfant;
        this.deceInterface.dateDeNaissDefunt = data.enfant.datenaissEnfant;
        this.deceInterface.lieuDeNaissDefunt = data.enfant.lieunaissEnfant;
        this.deceInterface.nomMereDefunt = data.mere.prenomsMere;
        this.deceInterface.nomPereDefunt = data.pere.prenomsPere;

      })
  }

  getPremierCopieById(id:string) {
    this.premierecopie.getCertificateByID(id)
      .subscribe(data => {
        this.deceInterface.idPremierCopie = id;
        this.deceInterface.nomDefunt = data.enfant.nomEnfant;
        this.deceInterface.prenomDefunt = data.enfant.prenomsEnfant;
        this.deceInterface.dateDeNaissDefunt = data.enfant.datenaissEnfant;
        this.deceInterface.lieuDeNaissDefunt = data.enfant.lieunaissEnfant;
        this.deceInterface.nomMereDefunt = data.mere.prenomsMere;
        this.deceInterface.nomPereDefunt = data.pere.prenomsPere;
        
        
      })
  }

  saveDecee() {
    this.decesservice.addDeces(this.deceInterface).subscribe(data => {
      const dialogRef = this.dialog.closeAll();
      this.router.navigate(['/dashboard/deces-list']);
    })
    console.log(this.data)

  }
  closedDeces() {
    this.CopieSelected += "";
  }
  spaceDeces() {
    this.CopieSelected = "";
  }
  FortyStep( ) {
    const declarant:any  = this.DeclarantFormGroup.value.datenaissDeclarant?.split("-") 
   const datenaiss = NombreEnLettre(declarant[2]).concat(' ',MoisMalgache(declarant[1]))
    this.datenaissDeclarant = datenaiss.concat(' ',NombreEnLettre(declarant[0]) )
    console.log(this.datenaissDeclarant )
 return this.datenaissDeclarant
  }

  FirstStep() {


    const enfant: any = this.certificate['enfant']['datenaissEnfant']?.split("-")
    const datenaiss = NombreEnLettre(enfant[2]).concat(' ', MoisMalgache(enfant[1]))
    this.datenaiss = datenaiss.concat(' ', NombreEnLettre(enfant[0]))

    const mere: any = this.certificate['mere']['datenaissMere']?.split("-")
    const datenaissMere = NombreEnLettre(mere[2]).concat(' ', MoisMalgache(mere[1]))
    this.datenaissMere = datenaissMere.concat(' ', NombreEnLettre(mere[0]))
    console.log(this.datenaiss, this.datenaissMere)

    const pere: any = this.certificate['pere']['datenaissPere']?.split("-")
    const datenaissPere = NombreEnLettre(pere[2]).concat(' ', MoisMalgache(pere[1]))
    this.datenaissPere = datenaissPere.concat(' ', NombreEnLettre(pere[0]))
    console.log(this.datenaissPere)

    const declarant: any = this.certificate['declarant']['datenaissDeclarant']?.split("-")
    const datenaissDeclarant = NombreEnLettre(declarant[2]).concat(' ', MoisMalgache(declarant[1]))
    this.datenaissDeclarant = datenaissDeclarant.concat(' ', NombreEnLettre(declarant[0]))
    console.log(this.datenaissDeclarant)

    const datenow = new Date(Date.now()).toLocaleString().split(',')[0];
    const localdate: any = datenow.split(" ");
    const currentdate = localdate[0].split("/");

    const date = NombreEnLettre(currentdate[0]).concat(' ', MoisMalgache(currentdate[1]))
    this.dateregistre = date.concat(' ', NombreEnLettre(currentdate[2]))
    console.log(this.dateregistre)

    return this.datenaiss, this.datenaissMere, this.datenaissPere, this.datenaissDeclarant, this.dateregistre

  }

  openDialog() {



    if (
      this.EnfantFormGroup.valid &&
      this.PiecesFormGroup.valid &&
      this.DeclarantFormGroup.valid &&
      this.DecesFormGroup.valid
    ) {
      this.EnfantFormGroup.value.dateEnfant = this.datenaiss
      this.EnfantFormGroup.value.dateMere = this.datenaissMere
      this.EnfantFormGroup.value.datePere = this.datenaissPere
      this.EnfantFormGroup.value.dateDeclarant = this.datenaissDeclarant
      this.EnfantFormGroup.value.dateregistre = this.dateregistre


      this.data = {
        ...this.DecesFormGroup.value,
        ...this.DeclarantFormGroup.value,
        ...this.EnfantFormGroup.value,
        ...this.certificate

      };

      const dialogRef = this.dialog.open(AdoptionCopieComponent, {
        maxWidth: '100vw',
        maxHeight: '100vh',
        height: '90%',
        width: '85%',
        panelClass: 'full-screen-modal',
        data: this.data,
      });

    }

  }


}

@Component({
  selector: 'app-copie',
  templateUrl: 'deces-actes.component.html',

})
export class AdoptionCopieComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private decesservice: DecesService,
    public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    console.log("data", this.data.idPremierCopie)
  }

  saveCertificate() {
    this.decesservice.addDeces(this.data).subscribe(data => {

      const dialogRef = this.dialog.closeAll();
      this.router.navigate(['/dashboard/deces-list']);
    })
    console.log(this.data)

  }

  
}
