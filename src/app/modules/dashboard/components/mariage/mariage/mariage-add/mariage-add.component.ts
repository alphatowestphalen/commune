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
    dateCopieMariage: this.today.toLocaleDateString('fr-FR',{
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'}),
    heureCopieMariage: this.today.toLocaleTimeString('fr-FR',{
      hour: 'numeric',
      minute: 'numeric'}),
    

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
    nationalFemme: [''],
    professionFemme: [''],
    datenaissFemme: [''],
    lieunaissFemme: [''],
    adresseFemme: [''],
   

  });

  MereFemmeFormGroup = this._formBuilder.group({
    nomFemmeMere: [''],
    prenomsFemmeMere: '',
    datenaissFemmeMere: [''],
    lieuNaissFemmeMere: [''],
    professionFemmeMere: [''],
    adresseFemmeMere: [''],
  })


  PereFemmeFormGroup = this._formBuilder.group({
    nomFemmePere: '',
    prenomsFemmePere: '',
    datenaissFemmePere: '',
    dateFemmePere: '',
    lieuNaissFemmePere: '',
    professionFemmePere: '',
    adressFemmePere: '',
  });

  HommeFormGroup = this._formBuilder.group({
    nomHomme: [''],
    prenomsHomme: [''],
    nationalHomme: [''],
    professionHomme: [''],
    datenaissHomme: [''],
    lieunaissHomme: [''],
    adresseHomme: [''],
  
  });

  MereHommeFormGroup = this._formBuilder.group({
    nomMere: [''],
    prenomsMere: '',
    datenaissMere: [''],
    dateMere: [''],
    lieuNaissMere: [''],
    professionMere: [''],
    adresseMere: [''],
  })


  PereHommeFormGroup = this._formBuilder.group({
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
    adressTemoinHomme: [''],
  })

  TemoinFemmeGroup = this._formBuilder.group({
    nomTemoinFemme: [''],
    prenomsTemoinFemme: [''],
    professionTemoinFemme: [''],
    datenaissTemoinFemme: [''],
    lieunaissTemoinFemme: [''],
    adressTemoinFemme: [''],
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
        this.filteredCopies = data.premierCopies;
        console.log(data);
      });
  }

  HommeStep() {
    if (this.PiecesFormGroup.value.typeHomme == 'interne') {
      this.isTypeHomme = false;
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
    console.log(this.CopieSelected);
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
  
    this.HommeFormGroup.value.nomHomme = this.CopieSelected.enfant.nomEnfant,
    this.HommeFormGroup.value.prenomsHomme = this.CopieSelected.enfant.prenomsEnfant,
    this.HommeFormGroup.value.datenaissHomme = this.CopieSelected.enfant.datenaissEnfant,
    this.HommeFormGroup.value.lieunaissHomme = this.CopieSelected.enfant.lieunaissEnfant,
    this.HommeFormGroup.value.nationalHomme = "Malagasy"

    this.PereHommeFormGroup.value.nomPere = this.CopieSelected.pere.nomPere,
    this.PereHommeFormGroup.value.prenomsPere = this.CopieSelected.pere.prenomsPere,
    this.PereHommeFormGroup.value.datenaissPere = this.CopieSelected.pere.datenaissPere,
    this.PereHommeFormGroup.value.lieuNaissPere = this.CopieSelected.pere.lieuNaissPere,
    this.PereHommeFormGroup.value.adressPere = this.CopieSelected.pere.adressePere,
    this.PereHommeFormGroup.value.professionPere = this.CopieSelected.pere.professionPere,

    this.MereHommeFormGroup.value.nomMere = this.CopieSelected.mere.nomMere,
    this.MereHommeFormGroup.value.prenomsMere = this.CopieSelected.mere.prenomsMere,
    this.MereHommeFormGroup.value.datenaissMere = this.CopieSelected.mere.datenaissMere;
    this.MereHommeFormGroup.value.lieuNaissMere = this.CopieSelected.mere.lieuNaissMere;
    this.MereHommeFormGroup.value.professionMere = this.CopieSelected.mere.professionMere;
    this.MereHommeFormGroup.value.adresseMere = this.CopieSelected.mere.adresseMere;
   }


   SecondFemmeInterne(){
  
    this.FemmeFormGroup.value.nomFemme = this.CopieSelected.enfant.nomEnfant,
    this.FemmeFormGroup.value.prenomsFemme = this.CopieSelected.enfant.prenomsEnfant,
    this.FemmeFormGroup.value.datenaissFemme= this.CopieSelected.enfant.datenaissEnfant,
    this.FemmeFormGroup.value.lieunaissFemme = this.CopieSelected.enfant.lieunaissEnfant,
    this.FemmeFormGroup.value.nationalFemme = "Malagasy"

    this.PereFemmeFormGroup.value.nomFemmePere = this.CopieSelected.pere.nomPere,
    this.PereFemmeFormGroup.value.prenomsFemmePere = this.CopieSelected.pere.prenomsPere,
    this.PereFemmeFormGroup.value.datenaissFemmePere = this.CopieSelected.pere.datenaissPere,
    this.PereFemmeFormGroup.value.lieuNaissFemmePere = this.CopieSelected.pere.lieuNaissPere,
    this.PereFemmeFormGroup.value.adressFemmePere = this.CopieSelected.pere.adressePere,
    this.PereFemmeFormGroup.value.professionFemmePere = this.CopieSelected.pere.professionPere,

    this.MereFemmeFormGroup.value.nomFemmeMere = this.CopieSelected.mere.nomMere,
    this.MereFemmeFormGroup.value.prenomsFemmeMere = this.CopieSelected.mere.prenomsMere,
    this.MereFemmeFormGroup.value.datenaissFemmeMere = this.CopieSelected.mere.datenaissMere;
    this.MereFemmeFormGroup.value.lieuNaissFemmeMere = this.CopieSelected.mere.lieuNaissMere;
    this.MereFemmeFormGroup.value.professionFemmeMere = this.CopieSelected.mere.professionMere;
    this.MereFemmeFormGroup.value.adresseFemmeMere = this.CopieSelected.mere.adresseMere;
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
