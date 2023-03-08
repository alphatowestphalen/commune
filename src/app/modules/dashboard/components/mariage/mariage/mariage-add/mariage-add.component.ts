import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper/index.js';
import { filter, distinctUntilChanged, debounceTime, tap, switchMap, finalize } from 'rxjs';
import { PremiereCopieService } from 'src/app/modules/dashboard/services/premiere-copie.service';
import "../../../../../../../assets/js/nombrelettre.js";

declare function NombreEnLettre(params:number)  : any;
declare function MoisMalgache(params: string) : any
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
  MaireSelected: any= [];

  searchCopie = new FormControl();
  filteredCopies: any = [];
  isLoading = false;
  errorMsg!: string;
  minLengthTerm = 1;
  CopieSelected: any = "";
  isTypeHomme= false;
  isTypeFemme = false;


  constructor( private _formBuilder: FormBuilder, private premiercopieService: PremiereCopieService) { }

  PiecesFormGroup = this._formBuilder.group({
    typeHomme: [''],
    typeFemme:['']
  }); 
  InterneFormGroup = this._formBuilder.group({
    dateMere: '',
    datePere: [''],
    dateDeclarant: [''],
    dateEnfant: [''],
    dateregistre: ['']
  });
 ExterneFormGroup = this._formBuilder.group({
    dateMere: '',
    datePere: [''],
    dateDeclarant: [''],
    dateEnfant: [''],
    dateregistre: ['']
  });
  TemoinFormGroup = this._formBuilder.group({
    parentAdoptif: [''],
    dateAdoption: [''],
    heureAdoption: [''],
    numAdoption: [''],
    createdDate: new Date()
  });

  ngOnInit(): void {
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

  HommeStep(){
   this.isTypeHomme = !this.isTypeHomme;
  }

  FemmeStep(){
    this.isTypeFemme = !this.isTypeFemme;
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

}
