import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper/index.js';
import { filter, distinctUntilChanged, debounceTime, tap, switchMap, finalize } from 'rxjs';
import { MaireService } from 'src/app/modules/dashboard/services/maire.service';
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



  constructor(private _formBuilder: FormBuilder, private maireservice: MaireService, private premiercopieService: PremiereCopieService) { }
  today = new Date();
  PiecesFormGroup = this._formBuilder.group({
    typeHomme: [''],
    typeFemme: [''],
    idCopieMariage: new FormControl(),
    dateCopieMariage: this.today,
    heureCopieMariage: this.today,
    idMaire: [''],
    nomMaire: [''],
    prenomsMaire: new FormControl(),
    fonction: new FormControl(),
    dateregistre: ['']

  });
  FemmeFormGroup = this._formBuilder.group({
    nomFemme: [''],
    prenomsFemme: [''],
    nationalFemme: [''],
    professionFemme: [''],
    datenaissFemme: [''],
    lieunaissFemme: [''],
    adresseFemme: [''],
    typeFemme: [''],

  });

  MereFemmeFormGroup = this._formBuilder.group({
    nomMere: [''],
    prenomsMere: '',
    datenaissMere: [''],
    dateMere: [''],
    lieuNaissMere: [''],
    professionMere: [''],
    adressMere: [''],
  })


  PereFemmeFormGroup = this._formBuilder.group({
    nomPere: '',
    prenomsPere: '',
    datenaissPere: '',
    datePere: '',
    lieuNaissPere: '',
    professionPere: '',
    adressPere: '',
  });

  HommeFormGroup = this._formBuilder.group({
    nomHomme: [''],
    prenomsHomme: [''],
    nationalHomme: [''],
    professionHomme: [''],
    datenaissHomme: [''],
    lieunaissHomme: [''],
    adresseHomme: [''],
    typeHomme: [''],
  });

  MereHommeFormGroup = this._formBuilder.group({
    nomMere: [''],
    prenomsMere: '',
    datenaissMere: [''],
    dateMere: [''],
    lieuNaissMere: [''],
    professionMere: [''],
    adressMere: [''],
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
      this.PiecesFormGroup.value.prenomsMaire= data.prenomsMaire;
      this.PiecesFormGroup.value.fonction = data.fonction;
      console.log(data);
    })
    this.MaireSelected = this.MaireSelected;
   

  }
}
