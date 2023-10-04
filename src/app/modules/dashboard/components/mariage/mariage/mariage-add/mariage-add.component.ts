import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper/index.js';
import { Router } from '@angular/router';
import { filter, distinctUntilChanged, debounceTime, tap, switchMap, finalize } from 'rxjs';
import { MaireService } from 'src/app/modules/dashboard/services/maire.service';
import { MariageService } from 'src/app/modules/dashboard/services/mariage.service';
import { PremiereCopieService } from 'src/app/modules/dashboard/services/premiere-copie.service';
import "../../../../../../../assets/js/nombrelettre.js";


declare function NombreEnLettre(params: number): any;
declare function MoisMalgache(params: string): any
@Component({
  selector: 'app-mariage-add',
  templateUrl: './mariage-add.component.html',
  styleUrls: ['./mariage-add.component.scss']
})
export class MariageAddComponent implements OnInit {

  isLinear = false;
  data: any;
  maire: any;
  datenaiss: string | null | undefined;
  datenaissMere: string | null | undefined;
  datenaissPere: string | null | undefined;
  datenaissDeclarant: string | null | undefined;
  dateregistre: string | null | undefined;
  MaireSelected: any = [];

  searchCopie = new FormControl();
  filteredCopies: any = [];
  isLoading = false;
  errorMsg!: string;
  minLengthTerm = 1;
  idCopieSelected:any = "";
  CopieSelected: any = "";
  isTypeHomme = false;
  isTypeFemme = false;



  constructor(private _formBuilder: FormBuilder, private maireservice: MaireService,
    private dialog:MatDialog, private premiercopieService: PremiereCopieService) { }
  today = new Date();
  PiecesFormGroup = this._formBuilder.group({
    typeHomme: new FormControl(),
    typeFemme: new FormControl(),
    idCopieMariage: new FormControl(),
    dateCopieMariage: this.today.toLocaleDateString(),
    dateMariage: this.today.toLocaleDateString('fr-FR',{
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'}),
      // dateCopieMariage: this.today.toLocaleDateString('fr-FR',{
      //   weekday: 'long',
      //   year: 'numeric',
      //   month: 'long',
      //   day: 'numeric'}),
    heureCopieMariage: this.today.toLocaleTimeString('fr-FR',{
      hour: 'numeric',
      minute: 'numeric'}),
      createdDAte : this.today,
      
    

  });

  MaireFormGroup = this._formBuilder.group ({
    idMaire: [''],
    nomMaire: [''],
    prenomsMaire: new FormControl(),
    fonction: new FormControl(),
  })
  FemmeFormGroup = this._formBuilder.group({

    nomFemme: [''],
    prenomsFemme: [''],
    nationaliteFemme: [''],
    professionFemme: [''],
    datenaissFemme: [''],
    lieunaissFemme: [''],
    adresseFemme: [''],
   idPremierCopieFemme: '',

  });

  MereFemmeFormGroup = this._formBuilder.group({
    idMereFemme: '',
    nomMereFemme: [''],
    prenomsMereFemme: '',
    datenaissMereFemme: [''],
    lieunaissMereFemme: [''],
    professionMereFemme: [''],
    adresseMereFemme: [''],
  })


  PereFemmeFormGroup = this._formBuilder.group({
    idPereFemme: '',
    nomPereFemme: '',
    prenomsPereFemme: '',
    datenaissPereFemme: '',
    dateFemmePere: '',
    lieuNaissPereFemme: '',
    professionPereFemme: '',
    adressPereFemme: '',
  });

  HommeFormGroup = this._formBuilder.group({
    idPremierCopieHomme: '',
    nomHomme: [''],
    prenomsHomme: [''],
    nationaliteHomme: [''],
    professionHomme: [''],
    datenaissHomme: [''],
    lieunaissHomme: [''],
    adresseHomme: [''],
  
  });

  MereHommeFormGroup = this._formBuilder.group({
    idMereHomme: '',
    nomMere: [''],
    prenomsMere: '',
    datenaissMere: [''],
    dateMere: [''],
    lieunaissMere: [''],
    professionMere: [''],
    adresseMere: [''],
  })


  PereHommeFormGroup = this._formBuilder.group({
    idPereHomme: '',
    nomPere: '',
    prenomsPere: '',
    datenaissPere: '',
    datePere: '',
    lieuNaissPere: '',
    professionPere: '',
    adressPere: '',
  });

  TemoinHommeGroup = this._formBuilder.group({
    nomTemoinHomme: [''],
    prenomsTemoinHomme: [''],
    professionTemoinHomme: [''],
    datenaissTemoinHomme: [''],
    lieunaissTemoinHomme: [''],
    adresseTemoinHomme: [''],
  })

  TemoinFemmeGroup = this._formBuilder.group({
    nomTemoinFemme: [''],
    prenomsTemoinFemme: [''],
    professionTemoinFemme: [''],
    datenaissTemoinFemme: [''],
    lieunaissTemoinFemme: [''],
    adresseTemoinFemme: [''],
  })

  ngOnInit(): void {
    this.getAllMaire();
    this.searchCopie.valueChanges
      .pipe(
        filter(res => {
          return res !== null && res.length >= this.minLengthTerm
        }),
        distinctUntilChanged(),
        debounceTime(1000),
        tap(() => {
          this.errorMsg = "";
          this.filteredCopies = [];
          this.isLoading = true;
        }),

        switchMap(value => this.premiercopieService.getFirstCertificates()
          .pipe(
            finalize(() => {
              this.isLoading = false
            }),
          )
        )
      )
      .subscribe((data: any) => {
        // if (data.premierCopies == undefined) {
        //   this.errorMsg = data['Error'];
        //   this.filteredCopies = [];
        // } else {
        //   this.errorMsg = "";

        // }
        this.filteredCopies = data.data;
      });
  }

  HommeStep() {
    console.log("homme step")
    if (this.PiecesFormGroup.value.typeHomme == 'interne') {
      this.isTypeHomme = false;
      console.log("homme step")
    }
    else
      this.isTypeHomme = true;
  }

  FemmeStep() {
    if (this.PiecesFormGroup.value.typeFemme == 'interne') {
      this.isTypeFemme = false;
    }
    else
      this.isTypeFemme = true;

  }

  onSelected() {
    console.log('====================================');
    console.log(this.CopieSelected.idPremierCopie);
    console.log('====================================');
    this.CopieSelected = this.CopieSelected;
  }

  displayWith(value: any) {
    return value?.idPremiereCopie;
  }

  clearSelection() {
    this.CopieSelected = "";
    this.filteredCopies = [];
  }


  getAllMaire(){
    this.maireservice.getAllMaire().subscribe(data=>{
      this.maire = data;
      console.log('================maire add mariage====================');
      console.log(this.maire);
      console.log('====================================');
    })
  }

  MaireSelect(value: any) {
    this.maireservice.getMaireById(value)
    .subscribe(data=>{
      this.MaireFormGroup.value.nomMaire = data.nomMaire;
      this.MaireFormGroup.value.prenomsMaire= data.prenomsMaire;
      this.MaireFormGroup.value.fonction = data.fonction;
      console.log(this.MaireFormGroup.value);
    })
  }

  OpenActeMariage() {
console.log(this.MaireFormGroup.value, this.PiecesFormGroup.value)
     if (
       this.PiecesFormGroup.valid &&
       this.MaireFormGroup.valid &&
       this.HommeFormGroup.valid &&
       this.FemmeFormGroup.valid &&
       this.MereHommeFormGroup.valid &&
       this.PereHommeFormGroup.valid &&
       this.MereFemmeFormGroup.valid &&
       this.PereFemmeFormGroup.valid &&
       this.TemoinHommeGroup && this.TemoinFemmeGroup
     ) {
      //  this.EnfantFormGroup.value.dateEnfant =  this.datenaiss
      //  this.MereFormGroup.value.dateMere =  this.datenaissMere
      //  this.PereFormGroup.value.datePere =  this.datenaissPere
      //  this.DeclarantFormGroup.value.dateDeclarant =  this.datenaissDeclarant
      //  this.MaireFormGroup.value.dateregistre = this.dateregistre
        this.data = {
         ...this.PiecesFormGroup.value,
         ...this.MaireFormGroup.value,
         ...this.HommeFormGroup.value,
         ...this.FemmeFormGroup.value,
         ...this.MereFemmeFormGroup.value,
         ...this.PereFemmeFormGroup.value,
         ...this.MereHommeFormGroup.value,
         ...this.PereHommeFormGroup.value,
         ...this.TemoinFemmeGroup.value,
         ...this.TemoinHommeGroup.value,
       };
       const dialogRef = this.dialog.open(AfficheMariageComponent, {
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

   FirstStep(){
 //  console.log(this.PiecesFormGroup.value, this.MaireFormGroup.value)
   }

   SecondStep(){  
 // console.log(this.HommeFormGroup.value, this.PiecesFormGroup.value)
 
   }

   SecondHommeInterne(){
    this.HommeFormGroup.value.idPremierCopieHomme = this.CopieSelected.idPremierCopie,
    this.HommeFormGroup.value.nomHomme = this.CopieSelected.enfant.nomEnfant,
    this.HommeFormGroup.value.prenomsHomme = this.CopieSelected.enfant.prenomsEnfant,
    this.HommeFormGroup.value.datenaissHomme = this.CopieSelected.enfant.datenaissEnfant,
    this.HommeFormGroup.value.lieunaissHomme = this.CopieSelected.enfant.lieunaissEnfant,
    this.HommeFormGroup.value.nationaliteHomme = "Malagasy"

    this.PereHommeFormGroup.value.idPereHomme = this.CopieSelected.pere.idPere,
    this.PereHommeFormGroup.value.nomPere = this.CopieSelected.pere.nomPere,
    this.PereHommeFormGroup.value.prenomsPere = this.CopieSelected.pere.prenomsPere,
    this.PereHommeFormGroup.value.datenaissPere = this.CopieSelected.pere.datenaissPere,
    this.PereHommeFormGroup.value.lieuNaissPere = this.CopieSelected.pere.lieuNaissPere,
    this.PereHommeFormGroup.value.adressPere = this.CopieSelected.pere.adressePere,
    this.PereHommeFormGroup.value.professionPere = this.CopieSelected.pere.professionPere,

    this.MereHommeFormGroup.value.idMereHomme = this.CopieSelected.mere.idMere,
    this.MereHommeFormGroup.value.nomMere = this.CopieSelected.mere.nomMere,
    this.MereHommeFormGroup.value.prenomsMere = this.CopieSelected.mere.prenomsMere,
    this.MereHommeFormGroup.value.datenaissMere = this.CopieSelected.mere.datenaissMere;
    this.MereHommeFormGroup.value.lieunaissMere = this.CopieSelected.mere.lieuNaissMere;
    this.MereHommeFormGroup.value.professionMere = this.CopieSelected.mere.professionMere;
    this.MereHommeFormGroup.value.adresseMere = this.CopieSelected.mere.adresseMere;
   }


   SecondFemmeInterne(){
    this.FemmeFormGroup.value.idPremierCopieFemme = this.CopieSelected.idPremiereCopie,
    this.FemmeFormGroup.value.nomFemme = this.CopieSelected.enfant.nomEnfant,
    this.FemmeFormGroup.value.prenomsFemme = this.CopieSelected.enfant.prenomsEnfant,
    this.FemmeFormGroup.value.datenaissFemme= this.CopieSelected.enfant.datenaissEnfant,
    this.FemmeFormGroup.value.lieunaissFemme = this.CopieSelected.enfant.lieunaissEnfant,
    this.FemmeFormGroup.value.nationaliteFemme = "Malagasy"

    this.PereFemmeFormGroup.value.idPereFemme = this.CopieSelected.pere.idPere,
    this.PereFemmeFormGroup.value.nomPereFemme = this.CopieSelected.pere.nomPere,
    this.PereFemmeFormGroup.value.prenomsPereFemme = this.CopieSelected.pere.prenomsPere,
    this.PereFemmeFormGroup.value.dateFemmePere = this.CopieSelected.pere.datenaissPere,
    this.PereFemmeFormGroup.value.lieuNaissPereFemme = this.CopieSelected.pere.lieuNaissPere,
    this.PereFemmeFormGroup.value.adressPereFemme = this.CopieSelected.pere.adressePere,
    this.PereFemmeFormGroup.value.professionPereFemme = this.CopieSelected.pere.professionPere,

    this.MereFemmeFormGroup.value.idMereFemme = this.CopieSelected.mere.idMere,
    this.MereFemmeFormGroup.value.nomMereFemme = this.CopieSelected.mere.nomMere,
    this.MereFemmeFormGroup.value.prenomsMereFemme = this.CopieSelected.mere.prenomsMere,
    this.MereFemmeFormGroup.value.datenaissMereFemme = this.CopieSelected.mere.datenaissMere;
    this.MereFemmeFormGroup.value.lieunaissMereFemme = this.CopieSelected.mere.lieuNaissMere;
    this.MereFemmeFormGroup.value.professionMereFemme = this.CopieSelected.mere.professionMere;
    this.MereFemmeFormGroup.value.adresseMereFemme = this.CopieSelected.mere.adresseMere;
   }
   
}

@Component({
  selector: 'affiche-mariage',
  templateUrl: 'affiche-mariage.component.html',
})
export class AfficheMariageComponent {
  constructor(@Inject (MAT_DIALOG_DATA) public data: any,
   public dialog: MatDialog, private router:Router , private mariageservice: MariageService ) {}

  ngOnInit() {
  console.log(this.data)
  this.saveMariage()
  }

  saveMariage(){

    this.mariageservice.addMariage(this.data, this.data.typeHomme, this.data.typeFemme)
    .subscribe((data: any)=>{
            const dialogRef = this.dialog.closeAll();
      this.router.navigate(['/dashboard/premiere-copie']);
    })
    console.log(this.data)

  }
}
